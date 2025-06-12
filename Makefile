# Makefile

# コンテナを起動するコマンド
up:
	docker compose up -d

# コンテナを停止するコマンド
d:
	docker compose down

# コンテナを再起動するコマンド
r:
	docker compose down && docker compose up -d

# ログを表示するコマンド
log:
	docker compose logs -f

# ログを表示するコマンド
app-log:
	docker compose exec app cat /var/www/laravel-react/storage/logs/laravel.log

# Laravelのキャッシュをクリアするコマンド
clear:
	docker compose exec app php artisan optimize:clear

# npm run buildを実行するコマンド
nbuild:
	docker compose exec node npm run build

# npm run devを実行するコマンド
ndev:
	docker compose exec node npm run dev

# npm installを実行するコマンド
npm-install:
	docker compose exec node npm install

# Docker内でLaravelのテストを実行する
test:
	docker compose exec app php artisan test

# コンテナの中に入るコマンド（bash）
ab:
	docker compose exec app bash

# コンテナの中に入るコマンド（bash）
nb:
	docker compose exec node bash