#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/freelancing/deploy.log
echo 'pm2 restart freelancing' >> /home/ec2-user/freelancing/deploy.log
pm2 restart me >> /home/ec2-user/freelancing/deploy.log
