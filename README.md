# Twilio SMS Node

A simple Node.js application to send SMS messages using Twilio's API.

## Features
- Send SMS messages to any phone number using Twilio.
- Easy setup and configuration.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A Twilio account. Sign up [here](https://www.twilio.com/try-twilio) if you don't have one.
- Twilio credentials: Account SID and Auth Token.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmanSalman/Twilio-SMS-Sender.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Twilio-SMS-Sender
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. run the server:
   ```bash
   npm run dev
   ```
## Configuration
Create a ``` .env ``` file in the root directory of the project and add the following:
```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
PORT=port_of_your_choice
```
Replace your_account_sid, your_auth_token, and your_twilio_phone_number with your actual Twilio credentials and phone number.
