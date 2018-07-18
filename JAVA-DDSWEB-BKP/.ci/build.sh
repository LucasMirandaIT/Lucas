echo "Running 'npm install'..."
npm install
  
if [ "$?" -eq 0 ];
then   
    echo "'npm install' successfull."
fi
  
echo "Executing 'npm run build'"
npm run build
if [ "$?" -eq 0 ];
then   
    echo "'build for prod finished' successfull."
fi