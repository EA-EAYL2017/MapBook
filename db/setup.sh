sudo mysql -e "set @username='${DB_USER}';set @password='${DB_PASS}';source 01-db-setup.sql;"
echo DB Setup Complete!