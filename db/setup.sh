if [[ $* == *--seed* ]]; then
	sudo mysql -e "drop database if exists MapBook;"
	rm .next-migration
fi

if [ -f '.next-migration' ]; then
	i=$(<.next-migration)
fi
if [ -z $i ]; then
	i=1
fi

while [ true ]; do
	filename=$(find . -name "0${i}-*")
	if [ -z $filename ]; then
		break;
	else
		echo $i: Running migration $filename...
		sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source ${filename};"
		i=$((i+1))
	fi
done

echo $i > .next-migration
echo DB Migration complete!

if [[ $* == *--seed* ]]; then
	sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source seeds.sql;"
	echo DB Seeding complete!
fi