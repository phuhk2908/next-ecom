"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// FAQ data organized by categories
const faqData = {
  general: [
    {
      question: "What is InsightBlog?",
      answer:
        "InsightBlog is a modern blogging platform designed to help creators share their insights and ideas with the world. Our platform offers a clean, user-friendly interface with powerful features for content creation and audience engagement.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can register using your email address or sign up with your Google, Facebook, or Twitter account for a quicker registration process.",
    },
    {
      question: "Is InsightBlog free to use?",
      answer:
        "InsightBlog offers both free and premium plans. The free plan includes basic features such as creating and publishing posts, while premium plans offer additional features like custom domains, advanced analytics, and monetization options.",
    },
    {
      question: "Can I use InsightBlog on mobile devices?",
      answer:
        "Yes, InsightBlog is fully responsive and works on all devices including smartphones, tablets, and desktop computers. We also offer mobile apps for iOS and Android for an enhanced mobile experience.",
    },
  ],
  account: [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Login' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions to reset your password.",
    },
    {
      question: "Can I change my username?",
      answer:
        "Yes, you can change your username in your account settings. Go to Settings > Account and update your username. Please note that if you change your username, your profile URL will also change.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "To delete your account, go to Settings > Account > Delete Account. Please note that this action is permanent and cannot be undone. All your content and data will be permanently removed from our platform.",
    },
    {
      question: "What happens to my content if I cancel my subscription?",
      answer:
        "If you cancel your premium subscription, your account will revert to the free plan at the end of your billing cycle. Your content will remain on the platform, but you'll lose access to premium features.",
    },
  ],
  content: [
    {
      question: "What types of content can I publish?",
      answer:
        "InsightBlog supports various content types including text, images, videos, and embeds from platforms like YouTube, Twitter, and Instagram. You can create rich, multimedia blog posts to engage your audience.",
    },
    {
      question: "Is there a limit to how much I can publish?",
      answer:
        "Free accounts can publish up to 10 posts per month. Premium accounts have unlimited publishing capabilities. There's also a 100MB storage limit for free accounts, while premium accounts have expanded storage options.",
    },
    {
      question: "Can I schedule posts for future publication?",
      answer:
        "Yes, premium users can schedule posts to be published at a specific date and time. This feature is available in the post editor by clicking on the 'Schedule' option instead of 'Publish'.",
    },
    {
      question: "How do I format my blog posts?",
      answer:
        "Our editor supports Markdown and rich text formatting. You can use headings, bold, italic, lists, links, and more to format your content. We also provide a visual editor for those who prefer a WYSIWYG experience.",
    },
  ],
  billing: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and in some regions, we support local payment methods. All payments are processed securely through our payment partners.",
    },
    {
      question: "How do I upgrade my subscription?",
      answer:
        "To upgrade your subscription, go to Settings > Billing > Change Plan. Select the plan that best suits your needs and follow the instructions to complete the payment process.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, you can request a refund within 14 days of your initial purchase. For refund requests, please contact our support team.",
    },
    {
      question: "How do I update my billing information?",
      answer:
        "To update your billing information, go to Settings > Billing > Payment Methods. You can add, edit, or remove payment methods, and update your billing address and contact information.",
    },
  ],
}

export function FaqContent() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {Object.entries(faqData).map(([category, questions]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-muted p-6 rounded-lg mt-8">
        <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-4">
          Can&apos;t find the answer you&apos;re looking for? Please contact our support team.
        </p>
        <a href="/contact">
          <Button>Contact Support</Button>
        </a>
      </div>
    </div>
  )
}
