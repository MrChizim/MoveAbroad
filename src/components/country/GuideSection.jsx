import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function GuideSection({ icon: Icon, title, content }) {
  if (!content) return null;

  return (
    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold">{title}</h3>
      </div>
      <div className="prose prose-sm max-w-none text-foreground">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="font-heading text-2xl font-bold mt-6 mb-3">{children}</h1>,
            h2: ({ children }) => <h2 className="font-heading text-xl font-semibold mt-5 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="font-heading text-lg font-semibold mt-4 mb-2">{children}</h3>,
            p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-3">{children}</p>,
            ul: ({ children }) => <ul className="space-y-2 mb-4 ml-4 list-disc">{children}</ul>,
            ol: ({ children }) => <ol className="space-y-2 mb-4 ml-4 list-decimal">{children}</ol>,
            li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
            strong: ({ children }) => <strong className="text-foreground font-semibold">{children}</strong>,
            a: ({ children, ...props }) => <a {...props} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}