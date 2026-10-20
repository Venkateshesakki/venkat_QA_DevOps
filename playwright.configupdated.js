// @ts-check
import { chromium, defineConfig, devices, firefox } from '@playwright/test';
import { trace } from 'node:console';
import { config } from 'node:process';


const Config = ({
  testDir: './tests',
  retries : 1,
  timeout: 40000,
  expect: {
    timeout: 5000,
  },
    reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  projects: [
    {
      name: 'Safari',
      use: {
        actionTimeout: 10_000,
        navigationTimeout: 30_000,
        browserName: 'webkit',
        headless: false,
        trace: 'on'
      }

    },
      {
      name: 'chrome',
      use: {
        actionTimeout: 10_000,
        navigationTimeout: 30_000,
        browserName: 'chromium',
        headless: false,
        trace: 'on',
        video: 'retain-on-failure'
      }

    }
  ]


});

module.exports = Config

