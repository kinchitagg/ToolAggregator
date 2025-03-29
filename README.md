# Tool Aggregator

A modern web application built with Node.js, TypeScript, and Express.js that aggregates and manages various tools. The application is containerized with Docker and deployed on Kubernetes with infrastructure managed through Terraform.

## Project Structure

```
.
├── src/                    # Source code directory
├── public/                 # Static files
├── dist/                   # Compiled JavaScript files
├── kubernetes/            # Kubernetes manifests
├── Terraform/             # Infrastructure as Code
│   ├── Environments/      # Environment-specific configurations
│   └── Modules/          # Reusable Terraform modules
├── mysql/                 # MySQL related files
└── Dockerfile            # Container configuration
```

## Technology Stack

- **Backend**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MySQL
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Infrastructure**: Terraform
- **Logging**: Winston
- **Security**: Helmet

## Prerequisites

- Node.js 18.x
- Docker
- Kubernetes cluster
- Terraform
- AWS CLI (for ECR access)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

4. Build the project:
   ```bash
   npm run build
   ```

## Docker Deployment

Build the Docker image:
```bash
docker build -t toolsearchapp .
```

Run the container:
```bash
docker run -p 3000:3000 toolsearchapp
```

## Kubernetes Deployment

The application is deployed on Kubernetes with the following components:

1. **Application Deployment** (`kubernetes/toolsearchapp.yaml`):
   - Deploys the main application
   - Configures environment variables
   - Sets up service for internal communication

2. **MySQL Deployment** (`kubernetes/mysql.yaml`):
   - Deploys MySQL database
   - Configures persistent storage
   - Sets up database credentials

3. **Ingress Configuration** (`kubernetes/ingress.yaml`):
   - Manages external access to the application
   - Configures routing rules

To deploy to Kubernetes:
```bash
kubectl apply -f kubernetes/
```

## Infrastructure (Terraform)

The infrastructure is managed through Terraform with the following structure:

- **Environments/**: Contains environment-specific configurations
  - Development
  - Production
  - Staging

- **Modules/**: Reusable infrastructure components
  - VPC
  - EKS
  - RDS
  - Security Groups

To apply infrastructure changes:
```bash
cd Terraform/Environments/<environment>
terraform init
terraform plan
terraform apply
```

## Environment Variables

Required environment variables:
- `DB_HOST`: MySQL host
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `DB_PORT`: Database port

## Security

- Helmet.js for HTTP security headers
- Environment variables for sensitive data
- Kubernetes secrets for production credentials
- Network policies for pod isolation

## Monitoring and Logging

- Winston for application logging
- Kubernetes metrics
- Container health checks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC
