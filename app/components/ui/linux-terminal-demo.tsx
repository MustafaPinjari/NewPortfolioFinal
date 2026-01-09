'use client';

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/app/registry/magicui/terminal';

export function LinuxTerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; neofetch</TypingAnimation>
      <AnimatedSpan delay={1500} className="text-cyan-400">
        <div className="my-2">
          <div>OS: Ubuntu 22.04.3 LTS x86_64</div>
          <div>Host: Developer Workstation</div>
          <div>Kernel: 6.2.0-39-generic</div>
          <div>Shell: zsh 5.8.1</div>
          <div>Terminal: gnome-terminal</div>
        </div>
      </AnimatedSpan>

      <TypingAnimation delay={3000}>
        &gt; cd ~/projects/gestureflow
      </TypingAnimation>

      <TypingAnimation delay={4000}>
        &gt; python3 -m venv venv && source venv/bin/activate
      </TypingAnimation>
      <AnimatedSpan delay={5000} className="text-green-500">
        ✔ Virtual environment activated
      </AnimatedSpan>

      <TypingAnimation delay={6000}>
        &gt; pip install -r requirements.txt
      </TypingAnimation>
      <AnimatedSpan delay={7000} className="text-green-500">
        ✔ Installing opencv-python
      </AnimatedSpan>
      <AnimatedSpan delay={7500} className="text-green-500">
        ✔ Installing django
      </AnimatedSpan>
      <AnimatedSpan delay={8000} className="text-green-500">
        ✔ Installing mediapipe
      </AnimatedSpan>

      <TypingAnimation delay={9000}>
        &gt; python manage.py runserver
      </TypingAnimation>
      <AnimatedSpan delay={10000} className="text-blue-500">
        <div>System check identified no issues (0 silenced).</div>
        <div>Starting development server at http://127.0.0.1:8000/</div>
        <div>Quit the server with CONTROL-C.</div>
      </AnimatedSpan>

      <TypingAnimation delay={12000} className="text-muted-foreground">
        🚀 GestureFlow running on Ubuntu!
      </TypingAnimation>
    </Terminal>
  );
}
