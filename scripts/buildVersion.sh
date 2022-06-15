#!/bin/bash

## Usage buildVersion.sh branchName
AWS_PROFILE=petersonv aws codebuild start-build --project-name guanabara_status_be --source-version $1