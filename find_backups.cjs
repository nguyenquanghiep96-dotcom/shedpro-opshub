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

  const files = {};

  for await (const line of rl) {
    if (line.includes('WorkOrdersContainer.tsx') || line.includes('CalendarView.tsx') || line.includes('RoutesContainer.tsx') || line.includes('transportationData.ts')) {
      try {
        const obj = JSON.parse(line);
        if (obj.tool_responses) {
          for (const tr of obj.tool_responses) {
            if (tr.name === 'default_api:view_file' && tr.response && tr.response.output) {
              const out = tr.response.output;
              if (out.includes('WorkOrdersContainer.tsx') || out.includes('CalendarView.tsx') || out.includes('RoutesContainer.tsx') || out.includes('transportationData.ts')) {
                // Extract file path from output
                const match = out.match(/File Path: `file:\/\/(.+?)`/);
                if (match) {
                  const fp = decodeURIComponent(match[1]);
                  const basename = path.basename(fp);
                  if (!files[basename]) {
                    // Extract the content lines
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
                        // Remove the line number prefix (e.g., "1: ")
                        const colonIdx = l.indexOf(':');
                        if (colonIdx > 0 && colonIdx < 10) {
                           contentLines.push(l.substring(colonIdx + 2));
                        }
                      }
                    }
                    if (contentLines.length > 0) {
                      files[basename] = contentLines.join('\n');
                      fs.writeFileSync('backup_' + basename, files[basename]);
                      console.log('Saved backup for ' + basename);
                    }
                  }
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
