#!/bin/bash
set -e  
cat .env 

if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL is not set"
  
fi

read -p "Press any key to continue..."
