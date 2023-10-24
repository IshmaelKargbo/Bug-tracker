start:
	@docker compose --env-file ./.env.local -f docker-compose.yml down --remove-orphans
	@docker compose --env-file ./.env.local -f docker-compose.yml up -d --build --force-recreate

destroy:
	@docker compose --env-file ./.env.local -f docker-compose.yml down -v
