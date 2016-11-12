#!/bin/bash

SOURCE=""
TARGET=""

cd "`dirname "$0"`"
SOURCE=`pwd`
cd -

if [ -n "$1" ]; then
  TARGET="$1"
  if ! [ -d "$1" ]; then
    echo "Target ($1) is not a directory" 1>&2
    exit 1
  fi
else
  cd "`dirname "$0"`"/..
  TARGET=`pwd`
  cd -
fi

if ! [ -d "$TARGET"/client -a -d "$TARGET"/server ]; then
  echo "Target ($TARGET) is not the Admin UI directory (missing client/ or server/)" 1>&2
  exit 1
fi

if [ -e "$TARGET"/client/skin ]; then
  echo "Target ($TARGET) is already skinned" 1>&2
  ls -ld "$TARGET"/client/skin
  exit 2
fi

ln -vsf "$SOURCE" "$TARGET"/client/skin
