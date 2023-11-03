# Copyright Jiaqi Liu
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

variable "aws_image_region" {
  type =  string
  sensitive = true
}

variable "ami_name" {
  type =  string
  sensitive = true
}

variable "instance_type" {
  type    = string
  description = "EC2 instance types defined in https://aws.amazon.com/ec2/instance-types/"

  validation {
    condition     = contains(["t2.micro", "t2.small", "t2.medium", "t2.large", "t2.xlarge", "t2.2xlarge"], var.instance_type)
    error_message = "Allowed values for input_parameter are those specified for T2 ONLY."
  }
}

variable "react_dist_path" {
  type =  string
  sensitive = true
}

variable "aws_react_ssl_cert_file_path" {
  type =  string
  sensitive = true
}

variable "aws_react_ssl_cert_key_file_path" {
  type =  string
  sensitive = true
}

variable "aws_react_nginx_config_file_path" {
  type =  string
  sensitive = true
}

variable "aws_react_dot_env_file_path" {
  type =  string
  sensitive = true
}

variable "skip_create_ami" {
  type =  bool
  sensitive = true
}

packer {
  required_plugins {
    amazon = {
      version = ">= 0.0.2"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

source "amazon-ebs" "react" {
  ami_name = "${var.ami_name}"
  force_deregister = "true"
  force_delete_snapshot = "true"
  skip_create_ami = "${var.skip_create_ami}"

  instance_type = "${var.instance_type}"
  launch_block_device_mappings {
    device_name = "/dev/sda1"
    volume_size = 8
    volume_type = "gp2"
    delete_on_termination = true
  }
  region = "${var.aws_image_region}"
  source_ami_filter {
    filters = {
      name = "ubuntu/images/*ubuntu-*-22.04-amd64-server-*"
      root-device-type = "ebs"
      virtualization-type = "hvm"
    }
    most_recent = true
    owners = ["099720109477"]
  }
  ssh_username = "ubuntu"
}

build {
  name = "install-react"
  sources = [
    "source.amazon-ebs.react"
  ]

  # Load SSL Certificates into AMI image
  provisioner "file" {
    source = "${var.aws_react_ssl_cert_file_path}"
    destination = "/home/ubuntu/aws-react.crt"
  }
  provisioner "file" {
    source = "${var.aws_react_ssl_cert_key_file_path}"
    destination = "/home/ubuntu/aws-react.key"
  }

  # Load Nginx config file into AMI image
  provisioner "file" {
    source = "${var.aws_react_nginx_config_file_path}"
    destination = "/home/ubuntu/aws-react-nginx.conf"
  }

  # Load React dist folder into AMI image
  provisioner "file" {
    source = "${var.react_dist_path}"
    destination = "/home/ubuntu/dist"
  }

  # Load React env file into AMI image
  provisioner "file" {
    source = "${var.aws_react_dot_env_file_path}"
    destination = "/home/ubuntu/.env"
  }

  provisioner "shell" {
    script = "../scripts/aws-react-pkr-setup.sh"
  }
}
