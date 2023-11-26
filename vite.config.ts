import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHubリポジトリ名をここに入れる
const repoName = 'developertool-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'
})
