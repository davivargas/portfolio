import type { ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const emailAddress = "davi.vargas7@gmail.com";
const emailSubject = "Portfolio inquiry";
const emailBody = `Hi Davi,

I found your portfolio and would like to connect about

[your message here]

Best,
[your name]`;

const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
const outlookComposeHref = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(emailAddress)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

type EmailOptionsProps = {
  children: ReactElement;
  align?: "start" | "center" | "end";
};

export const EmailOptions = ({ children, align = "end" }: EmailOptionsProps) => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      window.prompt("Copy email address:", emailAddress);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem asChild>
          <a href={gmailComposeHref} target="_blank" rel="noreferrer">
            Open Gmail
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={outlookComposeHref} target="_blank" rel="noreferrer">
            Open Outlook
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={copyEmail}>Copy email</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
