# OrangeHRM Automated Test Suite

This repository contains the automated regression test suite for the OrangeHRM demo application, created for the Software Testing and Quality Assurance final project.

## Technology Stack
* Language: JavaScript (Node.js)
* Testing Framework: Playwright Test (@playwright/test)
* Design Pattern: Page Object Model (POM)
* Reporting: Playwright HTML Report
* Build Tool: npm

## Prerequisites
Before running the tests, ensure you have the following installed:
* Node.js (v18 or higher - LTS recommended)
* npm (comes installed with Node.js)

## Installation & Setup
1. Clone this repository or download the source code folder.
2. Open your terminal and navigate to the project directory.
3. Install the project dependencies by running: npm install
4. Install the Playwright browsers (specifically Chromium) by running: npx playwright install chromium

## Execution Instructions
To run the entire automated test suite (8 tests covering Login and PIM), run: npx playwright test

To run a specific test file (e.g., just the Login tests), run: npx playwright test login.spec.js

## Viewing the Test Report
After the tests finish running, Playwright automatically generates an HTML report. To view the interactive report with step-by-step traces and screenshots, run: npx playwright show-report

## Coverage Limitation
As documented in our Test Plan, traditional code coverage tools (such as JaCoCo or Istanbul) cannot be used because the target is a third-party hosted demo whose source code cannot be instrumented. Instead, functional coverage is proven using the Playwright HTML report and the Requirement Coverage Matrix detailed in the Final Report.

## Test Structure
* login.spec.js - Contains the automated test scripts for the Login Module (4 tests).
* pim.spec.js - Contains the automated test scripts for the PIM Module (4 tests).
* LoginPage.js - Page Object Model class for Login UI locators and actions.
* PimPage.js - Page Object Model class for PIM UI locators and actions.
* playwright.config.js - Configuration file for the Playwright test runner.