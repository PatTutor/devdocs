---
title: PHP CodeSniffer
tags:
  - coding style
  - policies
  - tools
sidebar_position: 1
---

import { Since } from '@site/src/components';

## Overview

This document describes the various code sniffing tools that Moodle recommends, their purpose, and their usage.

[PHPCodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) is a tool used to analyse PHP code using a set of rules. In many cases these rules can be used to automatically fix the errors they identify.

Moodle has published a ruleset intended to meet the [Moodle Coding Style](/general/development/policies/codingstyle), and identify any parts of the code do not conform to this style.

## Installation

It is recommend that both the phpcs scripts, and the Moodle ruleset, are installed globally using Composer:

```console
composer global require moodlehq/moodle-cs
```

### Configuration

<Since versions={["4.1.0", "4.0.1", "3.11.7"]} issueNumber="MDL-74511" />

A PHPCS configuration is included in the Moodle codebase and ensures that the correct phpcs ruleset is always used for the Moodle codebase.

This can be further extended by generating an additional configuration to ignore all third-party libraries using the `grunt ignorefiles` command. See [grunt](/general/development/tools/nodejs#grunt) for further information on using Grunt.

#### Community plugins, and older Moodle versions

If you are developing your own plugin outside of the main Moodle directory, or you are working with an older version of Moodle, the easiest way to configure phpcs to use the Moodle ruleset is by creating a local `phpcs.xml.dist` configuration at the root directory of your repository with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ruleset name="MoodleCore">
  <rule ref="moodle"/>
</ruleset>
```

If you do not wish to include this file in your repository, or you are using an older version of Moodle, then you should add this to your local gitignore files. On a Unix-like system this can be achieved with:

```console
echo phpcs.xml.dist >> .git/info/exclude
```

:::info

The `.git/info/exclude` file is a per-repository version of the `.gitignore` file. Whilst `.gitignore` is tracked within the Moodle codebase and a version is shipped with Moodle, the `.git/info/exclude` file is local to your git clone.

See the [gitignore](https://git-scm.com/docs/gitignore) documentation for more information on the gitignore feature.

:::

#### System-side default standard

Although not recommended, you can configure the Moodle ruleset as the system-wide default for phpcs:

```php
phpcs --config-set default_standard moodle
```

:::important Not recommended

This approach is **not recommended** and is only preserved for reference.

:::

## Moodle plugin

Moodle includes a copy of the PHPCodeSniffer package, and the Moodle ruleset, as part of the [`moodle-local_codechecker`](https://github.com/moodlehq/moodle-local_codechecker) Moodle plugin. This makes the code checker available via a web-based interface for checking the syntax of a given file or folder.

One way to install this plugin is using `git clone`:

```console
git clone https://github.com/moodlehq/moodle-local_codechecker.git local/codechecker
```

It is recommended that you add the plugin to your _local_ git ignore:

```console
echo local/codechecker >> .git/info/exclude
```

:::info

The `.git/info/exclude` file is a per-repository version of the `.gitignore` file. Whilst `.gitignore` is tracked within the Moodle codebase and a version is shipped with Moodle, the `.git/info/exclude` file is local to your git clone.

See the [gitignore](https://git-scm.com/docs/gitignore) documentation for more information on the gitignore feature.

:::

:::note

If you are not installing the moodle ruleset globally, and are instead using the [`local_codechecker`](https://github.com/moodlehq/moodle-local_codechecker) plugin, then you _must_ also use the version of phpcs distributed in the plugin.

This is located at `local/codechecker/phpcs/bin/phpcs`.

:::

Once installed a new codechecker option will appear in the Site administration -> Development page.

This page allows for the code in a specified directory to be checked, for example if you wanted to check the code for the `shortanswer` question type you would enter

```
/question/type/shortanswer
```

You would then be presented with a list of the count of files processed and any warnings or errors.

## Editor integrations

Many modern editors and IDEs will natively integrate with PHPCodeSniffer, and since Moodle versions 3.11.7, 4.0.1, and 4.1.0, no additional configuration is required.

For older versions many editors will allow you to manually configure the PHPCodeSniffer standard to use, for example, the [VS Code PHPCodeSniffer extension](https://marketplace.visualstudio.com/items?itemName=obliviousharmony.vscode-php-codesniffer) can be configured in this way.

## Advanced Usage

### Ignoring warnings

You can run the CodeSniffer with the -n flag to ignore warnings:

```console
phpcs -n index.php
--------------------------------------------------------------------------------
FOUND 139 ERROR(S) AFFECTING 125 LINE(S)
--------------------------------------------------------------------------------
  28 | ERROR | line indented incorrectly; expected 0 spaces, found 4
  50 | ERROR | line indented incorrectly; expected 0 spaces, found 4
...
```

### Recursive analysis

If you give the name of a folder instead of a file, it will search, analyse and report on all PHP files found in this folder and all its subfolders. This will produce a full report for each PHP file. Since this is likely to be too much information, you may want to print only a summary report, by using the following syntax (search the files/ folder as an example):

```console
phpcs --report=summary blocks/html
PHP CODE SNIFFER REPORT SUMMARY
-----------------------------------------------------------------------------------------------------------------------
FILE                                                                                                   ERRORS  WARNINGS
-----------------------------------------------------------------------------------------------------------------------
/var/www/html/moodle/blocks/html/block_html.php                                       24      0
/var/www/html/moodle/blocks/html/edit_form.php                                        16      0
/var/www/html/moodle/blocks/html/lib.php                                              11      0
/var/www/html/moodle/blocks/html/settings.php                                         6       0
/var/www/html/moodle/blocks/html/backup/moodle2/backup_html_block_task.class.php      2       0
/var/www/html/moodle/blocks/html/backup/moodle2/restore_html_block_task.class.php     3       0
/var/www/html/moodle/blocks/html/classes/privacy/provider.php                         13      0
/var/www/html/moodle/blocks/html/classes/search/content.php                           6       0
/var/www/html/moodle/blocks/html/tests/search_content_test.php                        6       0
-----------------------------------------------------------------------------------------------------------------------
A TOTAL OF 87 ERRORS AND 0 WARNINGS WERE FOUND IN 9 FILES
-----------------------------------------------------------------------------------------------------------------------
PHPCBF CAN FIX 75 OF THESE SNIFF VIOLATIONS AUTOMATICALLY
-----------------------------------------------------------------------------------------------------------------------

Time: 626ms; Memory: 16MB
```

### Other report formats

CodeSniffer can export its reports in the following formats:

1. `full`: default, shown first above
1. `summary`: also shown above
1. `xml`: Simple XML format
1. `csv`: Comma-separated list
1. `checkstyle`: XML format intended for use with CruiseControl

## See also

1. [Coding](/general/development/policies)
1. [Coding style](/general/development/policies/codingstyle)
