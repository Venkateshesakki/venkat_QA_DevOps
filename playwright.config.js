// @ts-check
import { chromium, defineConfig, devices, firefox } from '@playwright/test';
import { trace } from 'node:console';
import { config } from 'node:process';


const Config = ({
  testDir: './tests',
  timeout: 40000,
  expect :{
     timeout : 5000,
  }, 
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  use: {
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    browserName : 'chromium',
    headless : false,
    trace: 'on'
  }

});

module.exports = Config

