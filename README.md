# Fabriplay UI - Sample Project Structure

## Project Structure
```
fabriplayui/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   └── app/
│       └── page.tsx            # Main page
├── public/                     # Static assets
├── .env.stage                  # Stage env vars (do NOT push real secrets)
├── .gitignore                  # Ignores node_modules, .env, etc.
├── docker-compose-stage.yaml   # Docker Compose for stage
├── Dockerfile                  # Docker build instructions
├── next.config.js              # Next.js config (output: standalone)
└── package.json                # Node dependencies
```

## Deployment Flow
1. Push code to `stage` branch
2. GitHub Actions triggers automatically
3. Self-hosted runner on EC2 picks up the job
4. Stops old containers → Builds new image → Starts fresh containers
5. UI is live on EC2!

## Important Notes
- Runner label in deploy.yml must match EC2 runner label (`aws`)
- docker-compose-stage.yaml filename must match exactly (case sensitive!)
- .env.stage must exist on EC2 manually (not pushed to GitHub)
