#!/bin/sh

REACT_APP_SHEET_ID=1DEBrE6KXBxdAaWnWfS-e0u2aFawrephhzmH81Ne5sxw npm run build
cp -a build/. docs/
