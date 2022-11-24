#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/me/deploy.log
echo 'pm2 restart all-business-backend' >> /home/ec2-user/me/deploy.log
pm2 restart me >> /home/ec2-user/me/deploy.log
