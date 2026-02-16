# Fix Vercel 404 NOT_FOUND

Per [Vercel NOT_FOUND docs](https://vercel.com/docs/errors/NOT_FOUND): the requested resource was not found. Do these steps in order.

---

## 1. Set Root Directory (most common cause)

1. Go to **https://vercel.com/dashboard** → open project **nabeels-code**.
2. **Settings** → **General**.
3. Find **Root Directory**.
4. Set it to **empty** (clear the field) so the repo root is used.
5. Click **Save**.

---

## 2. Trigger a fresh deploy

1. **Deployments** tab.
2. Click **⋯** on the latest deployment → **Redeploy**.
3. Or push a commit to your GitHub repo and wait for the new deployment.

---

## 3. Check the build

1. Open the **latest deployment** (not an old one).
2. Check **Building** – must finish with **Ready** (green).
3. If the build **failed**, open **View Function Logs** / **Build Logs** and fix the error shown (e.g. missing env, Node version, dependency error).

---

## 4. Use the deployment URL

1. After a **successful** deployment, use the URL from that deployment (e.g. `https://nabeels-code-xxx.vercel.app` or your production domain).
2. Avoid old or preview URLs that might point to deleted or failed deployments.

---

## 5. Environment variables (if build fails)

In **Settings** → **Environment Variables**, add for **Production** (and Preview if you use it):

- `OPENAI_API_KEY`
- `EMAIL_USER`
- `EMAIL_PASS`
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `923239960094`
- `NEXT_PUBLIC_SITE_URL` = `https://nabeels-code.vercel.app`

Redeploy after saving.

---

## 6. If it still 404s

- Confirm you’re on the **correct deployment** and that deployment is **Ready**.
- Check [Deployment Logs](https://vercel.com/docs/deployments/logs) for that deployment.
- Ensure you have access to the project and the right [permissions](https://vercel.com/docs/accounts/team-members-and-roles).

Reference: [Vercel NOT_FOUND](https://vercel.com/docs/errors/NOT_FOUND)
