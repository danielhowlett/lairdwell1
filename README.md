# Lairdwell Consulting — AI Consulting & Business Automation

Modern marketing, interactive price & ROI estimator, and consultation intake platform for **Lairdwell Consulting**.

---

## Deploying to Cloudflare & Syncing with GitHub

### 1. Sync Changes to GitHub
1. In the top toolbar of Google AI Studio, click the **GitHub** icon (**Sync to GitHub** / **Export to GitHub**).
2. Authenticate your GitHub account if prompted, choose a repository name (e.g., `lairdwell-consulting`), and push the branch.
3. Subsequent edits can be committed and pushed directly to your connected GitHub repository from the same menu.

---

### 2. Deploy as a Cloudflare Page (Not a Worker)
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Compute (Workers & Pages)**.
2. Click **Create** in the top-right.
3. **Important**: Switch from the default **Workers** tab at the top to the **Pages** tab (or click *"Looking to deploy Pages? Get started"* at the bottom of the Create page), then click **Connect to Git**.
4. Select your `lairdwell-consulting` GitHub repository.
5. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**. Every future push to your `main` branch on GitHub will automatically deploy to your `.pages.dev` URL.

---

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
