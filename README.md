# SchurrSchine

## Running the project locally

- Install Node v22.X.X
- Install pnpm 10.9.0
- From the project root:
  - `pnpm install`
  - Clone the `.env.example` file and rename it `.env`
  - Create an [EmailJS](https://www.emailjs.com/docs/tutorial/overview/) account
  - Connect an email service (such as GMAIL) and copy the service ID and update the `VITE_EMAILJS_SERVICE_ID` value to use this ID
  - Create a template in EmailJS and copy the template ID and update the `VITE_EMAILJS_TEMPLATE_ID` value to use this ID
  - Go to the "Account" section of your EmailJS account. Copy your Public Key and update the `VITE_EMAILJS_PUBLIC_KEY` to use this value
  - `pnpm run dev` (runs the project locally)

## Building the project for production

- Install Node v22.X.X
- Install pnpm 10.9.0
- From the project root:
  - `pnpm install`
  - `pnpm run build` (builds the project file)
