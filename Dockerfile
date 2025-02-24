# Stage 1: Build the Vite React project
FROM node:22 AS build

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm globalmente
RUN npm install -g pnpm

# Instale todas as dependências (produção e desenvolvimento)
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Certifique-se de que o TypeScript está instalado
RUN pnpm add typescript

# Build the project for production
RUN NODE_ENV=production pnpm run build

# Stage 2: Serve the project with Nginx
FROM nginx:latest

# Copy the built files from the previous stage to Nginx's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
