set -x

#rm sample.pdf

pdflatex -interaction=nonstopmode sample && bibtex sample && pdflatex sample && pdflatex -interaction=nonstopmode sample
# pdflatex -interaction=nonstopmode sample

# open sample.pdf


# rm -f paper.aux
# rm -f paper.bbl
# rm -f paper.blg
# rm -f paper.dvi
# rm -f paper.fdb_latexmk
# rm -f paper.fls
# rm -f paper.idx
# rm -f paper.ilg
# rm -f paper.ind
# rm -f paper.log
# rm -f paper.lol
# rm -f paper.nlo
# rm -f paper.out
# rm -f paper.out.ps
# rm -f paper.synctex.gz
# rm -f paper.toc
# rm -f x.log
# Blablabla said Nobody ~\cite{Nobody06}.
# in bibtex 
# @misc{ Nobody06,
#  author = "Nobody Jr",
#  title = "My Article",
#  year = "2006" }
