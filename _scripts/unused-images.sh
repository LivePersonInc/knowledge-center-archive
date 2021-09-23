
# THIS GRABS ALL MD FILES
echo "Reading files"
find ./_new -name "*.md"> ./_scripts/newFile.txt
find ./_release -name "*.md">> ./_scripts/newFile.txt
find ./pages -name "*.md">> ./_scripts/newFile.txt

input="./_scripts/newFile.txt"


# # THIS CREATE A LIST OF IMAGES 
# # this takes a long time
find -L ./img -name '*.*'> ./_scripts/images.txt
images="./_scripts/images.txt"

touch "./_scripts/images_clean.txt"
clean="./_scripts/images_clean.txt"
:>"$clean"
echo "Greping each file for images and adding those to a list"
echo "Note: This will take a long time"
while IFS= read -r image
do
  
echo "${image:2}" >>"$clean"
done < "$images"

rm "$images"
touch "$images"

while IFS= read -r  file
do
  while IFS= read -r line
  do
    # find if there is match in the file 
    #if match remove that text from the file
    if grep -q $line $file; then
      #found
      echo "$line" >> "$images"
       
    fi
  done < "$clean"

done < "$input"
echo "created list" 

# this dedupes the images by diffing the files
echo "creating diff file"
touch './_scripts/removeList.txt'
remove='./_scripts/removeList.txt'
: >'$remove'
# touch './_scripts/diff.txt'
diff='./_scripts/diff.txt'
: >'$diff'
diff -u ./_scripts/images_clean.txt ./_scripts/images.txt | sed -n '1,2d;/^[-|]/p' > './_scripts/diff.txt'
# rm "$input"

while IFS= read -r item
do
  
echo "${item:1}" >>'$remove' 
done < "$diff"


# while IFS= read -r line
# do
#   # find if there is match in the file 
#   #if match remove that text from the file
#     rm "./$line"
# done < "./_scripts/removeList.txt"

