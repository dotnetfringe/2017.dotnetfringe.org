build:
	@for i in *.md; do \
		echo "Converting $${i} to $${i%.*}.html"; \
		pandoc $$i -t html | echo "<p><a href='index.html'>&larr; back to Docs Index</a>$$(cat -)" |./template.sh > $${i%.*}.html; \
		page_list="$${page_list}<li><a href='$${i%.*}.html'>`head -1 $${i}`</a></li>"; \
	done; \
	echo "<h1>Docs</h1><ul>$${page_list}</ul>" | ./template.sh > index.html;

clean:
	@rm *.html
