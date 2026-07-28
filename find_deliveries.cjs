const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = '/Users/hiep/.gemini/antigravity/brain/c700f22f-34c9-4401-8635-75c87dc9ed4b/.system_generated/logs/transcript_full.jsonl';

async function processLineByLine() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('DeliveriesContract.tsx')) {
      try {
        const obj = JSON.parse(line);
        if (obj.tool_responses) {
          for (const tr of obj.tool_responses) {
            if (tr.name === 'default_api:view_file' && tr.response && tr.response.output) {
              const out = tr.response.output;
              if (out.includes('DeliveriesContract.tsx')) {
                const lines = out.split('\n');
                const contentLines = [];
                let inContent = false;
                for (const l of lines) {
                  if (l.startsWith('The following code has been modified')) {
                    inContent = true;
                    continue;
                  }
                  if (l.startsWith('The above content')) {
                    inContent = false;
                    continue;
                  }
                  if (inContent) {
                    const colonIdx = l.indexOf(':');
                    if (colonIdx > 0 && colonIdx < 10) {
                       contentLines.push(l.substring(colonIdx + 2));
                    }
                  }
                }
                if (contentLines.length > 100) {
                  fs.writeFileSync('backup_DeliveriesContract.tsx', contentLines.join('\n'));
                  console.log('Saved backup with ' + contentLines.length + ' lines');
                  return; // Just get the FIRST one we find
                }
              }
            }
          }
        }
      } catch (e) {}
    }
  }
}

processLineByLine();
