if [[ $* == *--seed* ]]; then
	sudo mysql -e "drop database if exists MapBook;"
fi

sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source 01-db-setup.sql;"
sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source 02-details-fields.sql;"
echo DB Setup Complete!

if [[ $* == *--seed* ]]; then
	sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source seeds.sql;"
	echo Overwrote DB with sample data
fi