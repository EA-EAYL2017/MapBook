if [[ $* == *--seed* ]]; then
	sudo mysql -e "drop database MapBook;"
fi

sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source 01-db-setup.sql;"
echo DB Setup Complete!

if [[ $* == *--seed* ]]; then
	sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source seeds.sql;"
	echo Overwrote DB with sample data
fi