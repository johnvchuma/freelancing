#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/me/deploy.log

echo '/home/ec2-user/me' >> /home/ec2-user/me/deploy.log
cd /home/ec2-user/me >> /home/ec2-user/me/deploy.log

echo 'npm install' >> /home/ec2-user/me/deploy.log 
npm install >> /home/ec2-user/me/deploy.log