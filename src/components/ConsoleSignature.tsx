"use client";

import { useEffect } from "react";

export const ConsoleSignature = () => {
    useEffect(() => {
        const signature = `
      .
     / \\
    /   \\
   /_____\\
  /\\     /\\
 /  \\   /  \\
/____\\ /____\\
\\    / \\    /
 \\  /   \\  /
  \\/_____\\/

    Built with passion by Akhilesh Waghmare
    Check out the source: https://github.com/akhilesh-w/akhileshw.xyz
    `;

        console.log(
            `%c${signature}`,
            "color: #6366f1; font-weight: bold; font-family: monospace;"
        );
    }, []);

    return null;
};
