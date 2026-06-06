# VENA Dashboard

Dashboard de faturamento Vena — hospedado no GitHub Pages com dados no Firebase Firestore.

## Estrutura

```
VENA-Dash/
├── index.html          # Dashboard principal (público)
├── admin.html          # Página de atualização mensal (autenticado)
├── seed.html           # Seed inicial dos dados históricos (usar 1x)
├── initial_data.json   # Dados históricos Jan/24–Mar/26
├── logo.png            # Logo Vena
├── firebase-config.js  # Configuração Firebase (referência)
├── firestore.rules     # Regras de segurança Firestore
└── .github/workflows/
    └── deploy.yml      # Auto-deploy GitHub Pages
```

---

## Setup — Passo a Passo

### 1. Firebase — Configurar projeto

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Selecione o projeto **vena-dashboard-elit**
3. Vá em **Authentication → Sign-in method → Email/Password** → Ativar
4. Crie seu usuário admin em **Authentication → Users → Add user**
5. Vá em **Firestore Database → Criar banco de dados → Modo de produção**
6. Vá em **Project Settings → General** e copie as credenciais do Web App

### 2. Inserir credenciais Firebase

Substitua `YOUR_API_KEY`, `YOUR_SENDER_ID` e `YOUR_APP_ID` nos arquivos:
- `index.html` (buscar por `YOUR_API_KEY`)
- `admin.html` (buscar por `YOUR_API_KEY`)
- `seed.html` (buscar por `YOUR_API_KEY`)

As credenciais ficam em **Project Settings → Your apps → Firebase SDK snippet → Config**.

### 3. Publicar regras do Firestore

No terminal (com Firebase CLI instalado):
```bash
firebase deploy --only firestore:rules --project vena-dashboard-elit
```

Ou cole o conteúdo de `firestore.rules` manualmente em **Firestore → Rules**.

### 4. GitHub Pages — Ativar

1. No repositório `costarubian-svg/VENA-Dash`
2. Vá em **Settings → Pages**
3. Source: **GitHub Actions**
4. O workflow em `.github/workflows/deploy.yml` faz o deploy automaticamente a cada push

### 5. Seed — Carregar dados históricos

1. Acesse `https://costarubian-svg.github.io/VENA-Dash/seed.html`
2. Clique em **Executar Seed**
3. Insira email e senha do usuário admin criado no Firebase
4. Aguarde carregar todos os 27 meses históricos (~2 min)
5. ✅ Pronto — feche a página

### 6. Verificar dashboard

Acesse: **https://costarubian-svg.github.io/VENA-Dash/**

---

## Fluxo Mensal (todo mês)

1. Acesse `https://costarubian-svg.github.io/VENA-Dash/admin.html`
2. Faça login com seu email/senha
3. Suba o Excel do novo mês (exportação padrão do sistema)
4. Classifique clientes novos (se houver)
5. Clique **Publicar** — dados vão pro Firebase em ~30 segundos
6. Dashboard em `index.html` atualiza automaticamente para todos

---

## Compartilhar com o chefe

Link fixo: **https://costarubian-svg.github.io/VENA-Dash/**

Não precisa instalar nada. Abre no browser, dados sempre atualizados.
