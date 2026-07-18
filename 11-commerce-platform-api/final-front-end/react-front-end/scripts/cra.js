const { spawnSync } = require('child_process');
const path = require('path');

const command = process.argv[2];
const reactScripts = path.resolve(__dirname, '../node_modules/react-scripts/bin/react-scripts.js');
const result = spawnSync(process.execPath, [reactScripts, command], {
  env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' },
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
