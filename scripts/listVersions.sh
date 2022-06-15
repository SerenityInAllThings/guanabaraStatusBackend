#!/bin/bash

AWS_PROFILE=petersonv aws s3 ls s3://code-build-versions/guanabara_status_be/ | awk '{ print $NF }'