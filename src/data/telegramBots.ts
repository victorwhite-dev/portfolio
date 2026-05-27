export type TelegramBot = {
  id: string
  title: string
  description: string
  features: string[]
  techStack: string[]
  botUrl: string
  chat: { user: string; bot: string }
}

export const telegramBots: TelegramBot[] = [
  {
    id: "shoptracker-bot",
    title: "Barbershop Bot",
    description:
      "Barbershop booking bot that lets clients book appointments, manage reservations, and receive instant confirmations directly in Telegram.",
    features: [
      "Real-time appointment booking",
      "Admin panel for barber to manage schedule",
      "Double-booking protection with DB constraints",
    ],
    techStack: ["Node.js", "Telegraf", "Supabase"],
    botUrl: "#",
    chat: {
      user: "Look like a caveman right now 💀",
      bot: "Haha, we got you covered bro. Tap below to fix that!",
    },
  },
  {
    id: "supportdesk-bot",
    title: "SupportDesk Bot",
    description:
      "Automated customer support bot with an AI-powered FAQ engine and seamless escalation to a live operator when needed.",
    features: [
      "AI-driven FAQ & intent recognition",
      "Human escalation with context handoff",
      "Conversation history & analytics",
    ],
    techStack: ["Node.js", "Telegraf", "OpenAI API", "MongoDB"],
    botUrl: "#",
    chat: {
      user: "I can't log into my account",
      bot: "🤖 I found your account. Want me to send a password reset link?",
    },
  },
  {
    id: "reminderpro-bot",
    title: "ReminderPro Bot",
    description:
      "Personal productivity bot that schedules appointments and sends smart task reminders via cron-based job queues.",
    features: [
      "Natural-language reminder parsing",
      "Recurring & one-time cron schedules",
      "Multi-timezone support",
    ],
    techStack: ["Python", "aiogram", "Redis", "Cron"],
    botUrl: "#",
    chat: {
      user: "Remind me to call John tomorrow at 9am",
      bot: "✅ Reminder set! I'll notify you tomorrow at 9:00 AM",
    },
  },
]
