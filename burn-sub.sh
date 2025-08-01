# Copyright 2025 Jiaqi Liu. All rights reserved.
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

#!/bin/bash

set -x
set -e

# $1 = input mp4 path
# $2 = .srt path
# $3 = output mp4 path
# $4 = font, default to Poppins
# $5 = font size, default to 24

ffmpeg -i $1 -vf "subtitles=${2}:force_style='FontName=${4:-Poppins},Fontsize=${5:-24}'" $3
