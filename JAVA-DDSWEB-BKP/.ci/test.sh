#!/bin/bash
  
echo "Executing 'npm test'"
npm test
if [ "$?" -eq 0 ];
then   
    echo "'npm test finished' successfull."
fi