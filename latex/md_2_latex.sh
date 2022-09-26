set -x

pandoc -V  --citeproc  -V --wrap=preserve exported_md.md -o content.tex
cat content.tex | sed \
  -e 's/\\\section/\\\chapter/g' \
  -e 's/\\\subsection/\\\section/g' \
  -e 's/\\\subsubsection/\\\subsection/g' \
  > tmp && mv tmp content.tex
  # -e 's/\\\hypertarget/\\\hyperref/g' \
