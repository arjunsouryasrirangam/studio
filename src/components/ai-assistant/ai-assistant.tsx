
'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Loader2, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { searchSite } from '@/ai/flows/site-search-flow';
import { Avatar, AvatarFallback } from '../ui/avatar';
import Logo from '../logo';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hello! I'm BLOBAI, your AI assistant. Ask me anything about Arjun's portfolio.",
          sender: 'bot',
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // Use `scrollHeight` to get the total height of the content
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    // Check for the admin secret command
    if (trimmedInput === 'admin:sarjunsourya.40315@') {
      router.push('/admin');
      setInput('');
      setIsOpen(false);
      return;
    }

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await searchSite({ query: input });
      const botMessage: Message = { text: botResponse, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('AI search failed:', error);
      const errorMessage: Message = {
        text: "Sorry, I'm having a little trouble connecting right now. Please try again later.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm">
          <Card className="flex flex-col h-[60vh] shadow-2xl">
            <CardHeader className="flex-row items-center gap-3">
               <Avatar>
                <AvatarFallback className="bg-primary/10">
                    <Logo className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline">BLOBAI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
               <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
                 <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-end gap-2',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.sender === 'bot' && (
                        <Avatar className="h-8 w-8">
                           <AvatarFallback className="bg-primary/10 text-primary">
                             <Bot className="h-5 w-5" />
                           </AvatarFallback>
                        </Avatar>
                      )}
                       <div
                        className={cn(
                          'max-w-[80%] rounded-lg px-4 py-2 text-sm',
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                      >
                        {message.text}
                      </div>
                       {message.sender === 'user' && (
                        <Avatar className="h-8 w-8">
                           <AvatarFallback>
                             You
                           </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                   {isLoading && (
                     <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                           <AvatarFallback className="bg-primary/10 text-primary">
                             <Bot className="h-5 w-5" />
                           </AvatarFallback>
                        </Avatar>
                        <div className="max-w-[80%] rounded-lg px-4 py-2 text-sm bg-muted flex items-center">
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                    </div>
                  )}
                 </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="pt-6">
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
