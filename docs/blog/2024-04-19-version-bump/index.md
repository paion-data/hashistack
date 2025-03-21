---
slug: version-bump
title: Bumping Semantic Version by GitHub Tag
authors: [jiaqi]
tags: [CI/CD, GitHub, Frontend]
---

We offer a convenient versioning management approach for releasing software on GitHub.

<!--truncate-->

:::warning

The GitHub repository must grant *write* access to this workflow permission, i.e. navigate to **Settings** ->
**Actions** -> **General**; under *Workflow permissions* make sure **Read and write permissions** is checked:

![Error loading permissions.png](./permission.png)

:::

1. Manually create the first tag:

   ```shell
   git tag -a v0.0.1 -m "v0.0.1"
   git push origin v0.0.1
   ```

2. Create a pull request that adds the following job to GitHub Action

  ```yaml
  "on":
    pull_request:
    push:
      branches:
        - master

  jobs:
    push-release-tag:
      if: github.ref == 'refs/heads/master'
      uses: paion-data/hashistack/.github/workflows/version-bump.yml@master
      with:
        user: QubitPi
        email: jack20220723@gmail.com
  ```

3. When the pull request is merged, the version bump action will automatically create and push a new version tag of
   `MAJOR`.`MINOR`.(`PATCH` + 1)

:::tip

Bumping the `MAJOR` or `MINOR` version still needs to be done manually using `git tag -a vx.x.x -m "vx.x.x"` command
given the assumption that agile software development will change patch version most frequently and almost always

:::
