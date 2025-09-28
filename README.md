[{contamHandlers~plugg·in~noTEmpty-container🦠🪲}]
## VIRUS**
[]=[""|""|""]) >---
###
For recursive traverlsals coding --> laplace transforms & spatio-visual redefinition.
###
Ethical Hack·ing!
###
###
'''
# Installing Miniconda 𓆨

export const Danger = ({children}) => {
  return <div class="callout my-4 px-5 py-4 overflow-hidden rounded-2xl flex gap-3 border danger-admonition dark:danger-admonition" data-callout-type="danger">
      <div class="mt-0.5 w-4">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="rgb(239, 68, 68)" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-sky-500" aria-label="Danger">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.3C10.14 1.3 12.7 3.86 12.7 7C12.7 10.14 10.14 12.7 7 12.7C5.48908 12.6974 4.0408 12.096 2.97241 11.0276C1.90403 9.9592 1.30264 8.51092 1.3 7C1.3 3.86 3.86 1.3 7 1.3ZM7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM8 3H6V8H8V3ZM8 9H6V11H8V9Z"></path>
        </svg>
      </div>
      <div class="text-sm prose min-w-0 w-full">
        {children}
      </div>
    </div>;
};

<Accordion title="Using Miniconda in a commercial setting?">
  * You might need to purchase a license to stay compliant with our [Terms of Service](https://www.anaconda.com/legal).

  * If your company security policies do not allow admin privileges for end users, you will be unable to install Miniconda manually. Consider requesting that your IT admin add Miniconda to a software delivery or fleet management system (such as Kanji, Jamf, etc.).
</Accordion>

This page contains basic Miniconda installation instructions for Windows, macOS, and Linux, as well as a command-line quickstart installation guide.

<Note>
  On Windows, macOS, and Linux, it is best to install Miniconda for the local user, which does not require administrator permissions and is the most robust type of installation. However, if you need to, you can install Miniconda system wide, which does require administrator permissions.
</Note>

## Basic install instructions

<AccordionGroup>
  <Accordion title="Windows installation">
    <div class="video">
      <iframe src="https://www.youtube.com/embed/AgnAs0nPEVg" title="YouTube video player" frameborder="0" enablejsapi="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen />
    </div>

    1. Download the installer from the Anaconda website or by using your preferred command line interface:

       <Tabs>
         <Tab title="Anaconda website">
           Navigate to [anaconda.com/download](https://www.anaconda.com/download?utm_source=anacondadocs\&utm_medium=documentation\&utm_campaign=download\&utm_content=installwindows), register with Anaconda (if desired), and click <Icon icon="windows" iconType="brands" /> **Download for Windows** under Miniconda Installers.
         </Tab>

         <Tab title="Command Prompt">
           Open a Command Prompt window and run the following command:

           ```sh
           curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe --output .\Downloads\Miniconda3-latest-Windows-x86_64.exe
           ```

           <Accordion title="To download a different version">
             View a full list of Miniconda installers in the official [Miniconda archive](https://repo.anaconda.com/miniconda/).

             To download a different version of Miniconda, copy the **Filename** of an installer from the Miniconda archive, then download it using a `curl` command:

             ```sh
             # Replace <FILENAME> with the installer Filename you copied from the Miniconda archive
             curl https://repo.anaconda.com/miniconda/<FILENAME> --output <FILENAME>
             ```

             <Danger>
               Ensure that you are downloading an installer that is compatible with your operating system!
             </Danger>
           </Accordion>
         </Tab>

         <Tab title="PowerShell">
           Open a PowerShell window and run the following command:

           ```powershell
           wget "https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe" -outfile ".\Downloads\Miniconda3-latest-Windows-x86_64.exe"
           ```

           <Accordion title="To download a different version">
             View a full list of Miniconda installers in the official [Miniconda archive](https://repo.anaconda.com/miniconda/).

             To download a different version of Miniconda, copy the **Filename** of an installer from the Miniconda archive, then download it using a `wget` command:

             ```powershell
             # Replace <FILENAME> with the installer Filename you copied from the Miniconda archive
             wget "https://repo.anaconda.com/miniconda/<FILENAME>"" -outfile ".\Downloads\<FILENAME>"
             ```

             <Danger>
               Ensure that you are downloading an installer that is compatible with your operating system!
             </Danger>
           </Accordion>
         </Tab>
       </Tabs>

    2. (Recommended) Verify the integrity of your installer to ensure that it was not corrupted or tampered with during download.

       <Accordion title="How do I verify my installer's integrity?">
         To ensure that your downloaded installer has not been tampered with or corrupted, generate its SHA-256 hash value and compare that hash to the official hash provided in the archive.

         1. Open PowerShell and run the following command:

            ```sh
            # Replace <INSTALLER_FILE> with the name of the downloaded installer file
            Get-FileHash .\Downloads\<INSTALLER_FILE> -Algorithm SHA256
            ```

            For example:

            ```
            Get-FileHash .\Downloads\Miniconda3-latest-Windows-x86_64.exe -Algorithm SHA256
            ```

         2. Note the generated SHA-256 hash value from the output.

         3. Visit [repo.anaconda.com/miniconda](https://repo.anaconda.com/miniconda/) to find the official SHA-256 hash for your installer.

         4. Compare the hash values. If they match, the installer is safe to use.

         <Tip>
           For more information, see [cryptographic hash verification](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#cryptographic-hash-verification) in the official conda documentation.
         </Tip>
       </Accordion>

    3. Go to your Downloads folder (or Home folder if downloaded via CLI) and double-click the installer to launch.

       <Warning>
         To prevent permission errors, do not launch the installer from the [Favorites folder](../../reference/troubleshooting/#distro-troubleshooting-favorites-folder).
       </Warning>

       <Note>
         If you encounter issues during installation, temporarily disable your anti-virus software during install, then re-enable it after the installation concludes. If you installed for **All Users**, [uninstall](/getting-started/miniconda/uninstall) Miniconda and re-install it for **Just Me** only.
       </Note>

    4. Read through [Miniconda's End User License Agreement (EULA)](https://www.anaconda.com/legal/terms/miniconda) and click **I Agree** to agree to the terms. You can view Anaconda's Terms of Service (TOS) at [https://www.anaconda.com/legal](https://www.anaconda.com/legal).

    5. Select an installation option:

       * Just Me (Recommended) - Install Miniconda for the current user account.
       * All Users - Install Miniconda for all user accounts on the computer (requires Windows Administrator privileges).

    6. Click **Next**.

    7. Select a destination folder to install Miniconda, then click **Next**.

       <Warning>
         * Anaconda recommends installing Miniconda in a directory with no spaces or special characters to avoid potential compatibility issues with open-source tools. For more information, see the [FAQ](/getting-started/working-with-conda/reference/faq/#in-what-folder-should-i-install-anaconda-on-windows).
         * Do not install as Administrator unless admin privileges are required.
       </Warning>

    8. Customize your installation options:

       * Create shortcuts - Selected by default. Creates Start Menu shortcuts for the Anaconda Prompt packages. Deselecting this option skips creating these shortcuts.
       * Add Miniconda3 to my PATH environment variable - Adds the path that contains the conda binaries to your PATH environment variable.

       Anaconda **does not** recommend selecting this option. The conda binaries path contains other package binaries, which are permanently added to your PATH environment variable, even if no conda environment is currently active. This makes it possible for other software to use these package files, which might lead to errors.

       <Note>
         Unless you plan on installing and running multiple versions of Miniconda or Python, open Anaconda Prompt from the Start Menu to begin your environment management work.
       </Note>

       * Register Miniconda3 as my default Python 3.13 - Selected by default. Registers the Python package in this install as the default Python for programs like VSCode, PyCharm, and so on.
       * Clear the package cache upon completion - Runs `conda clean --all --force-pkgs-dirs` after the install finishes. For more information on these commands, see the [conda command documentation](https://docs.conda.io/projects/conda/en/stable/commands/clean.html).

    9. Click **Install**. The installation might take a few minutes to complete. Click **Show details** to view the packages being installed.

    10. Click **Next** twice, then click **Finish** to close the installer.

    11. Open [Anaconda Prompt](/reference/glossary#anaconda-prompt) to use Miniconda.

    For information on installing in silent mode, see the [Quick command line install](#quickstart-install-instruction) commands for examples or the Installing in silent mode section of [Installing on Windows](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html#install-win-silent) in the conda project documentation.
  </Accordion>

  <Accordion title="macOS/Linux installation">
    <Note>
      As of August 15, 2025, Anaconda has stopped building packages for Intel Mac computers (osx-64). Existing Intel (`MacOSX-x86_64`) installers are still available at [https://repo.anaconda.com/miniconda/](https://repo.anaconda.com/miniconda/) and the last Miniconda installer release for Intel Mac computers will be 25.7.x. For more information, see [our blog on the end of Intel mac support](https://www.anaconda.com/blog/intel-mac-package-support-deprecation).
    </Note>

    <Tabs>
      <Tab title="macOS graphical installer">
        <Warning>
          The graphical installer for macOS installs Miniconda into `/opt/miniconda3` in your file system. If you want to install Miniconda into your Home directory or if you have multiple users on a system and want to manage your installation more carefully, Anaconda recommends the [shell (or command line) installer](#quickstart-install-instruction).
        </Warning>

        1. Navigate to [anaconda.com/download](https://www.anaconda.com/download?utm_source=anacondadocs\&utm_medium=documentation\&utm_campaign=download\&utm_content=installwindows), register with Anaconda (if desired), and click <Icon icon="apple" iconType="brands" /> **Download for Mac** under Miniconda Installers.

        2. (Optional) Anaconda recommends verifying the integrity of the installer after downloading it.

           <Accordion title="How do I verify my installer's integrity?">
             To ensure that your downloaded installer has not been tampered with or corrupted, generate its SHA-256 hash value and compare that hash to the official hash provided in the archive.

             1. Open Terminal and run the following command:

                ```sh
                # Replace <FILE_NAME> with the path to your installer
                shasum -a 256 <FILE_NAME>
                ```

                For example:

                ```sh
                shasum -a 256 ~/Downloads/Miniconda3-latest-MacOSX-arm64.pkg
                ```
             2. Note the generated SHA-256 hash value from the output.
             3. Visit [repo.anaconda.com/miniconda](https://repo.anaconda.com/miniconda/) to find the official SHA-256 hash for your installer.
             4. Compare the hash values. If they match, the installer is safe to use.

             <Tip>
               For more information, see [cryptographic hash verification](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#cryptographic-hash-verification) in the official conda documentation.
             </Tip>
           </Accordion>

        3. Double-click the `.pkg` file.

        4. View the Read Me instructions and click **Continue**.

        5. Read through [Miniconda's End User License Agreement (EULA)](https://www.anaconda.com/legal/terms/miniconda) and click **Continue**, then click **Agree** to agree to the terms. You can view Anaconda's Terms of Service (TOS) at [https://www.anaconda.com/legal](https://www.anaconda.com/legal).

        6. Choose an install location:

           * Install for all users of this computer (Recommended) - Installs Miniconda into /opt/miniconda3 for all users of the computer.
           * Install on a specific disk - Enables you to choose a different location to install Miniconda.

        7. Click **Install**. When the installation finishes, open your terminal application.

           <Note>
             You should see `(base)` in the command line prompt. This tells you that you're in your base conda environment. To learn more about environments, see [Environments](/getting-started/working-with-conda/environments).
           </Note>

        8. Test your installation by running `conda list`. If conda has been installed correctly, a list of installed packages appears.
      </Tab>

      <Tab title="macOS terminal installer">
        1. Download the `.sh` installer by opening a terminal and running one of the following commands (depending on your macOS architecture):

           <CodeGroup>
             ```sh Apple Silicon
             curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
             ```

             ```sh Intel
             curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
             ```
           </CodeGroup>

           <Accordion title="To download a different version">
             View a full list of Miniconda installers in the official [Miniconda archive](https://repo.anaconda.com/miniconda/).

             To download a different version of Miniconda, copy the **Filename** of an installer from the archive, then download it using a `curl` command:

             ```
             # Replace <FILENAME> with the installer Filename you copied from the archive
             curl -O https://repo.anaconda.com/miniconda/<FILENAME>
             ```

             <Danger>
               Ensure that you are downloading an installer that is compatible with your operating system!
             </Danger>
           </Accordion>

        2. (Optional) Anaconda recommends verifying the integrity of the installer after downloading it.

           <Accordion title="How do I verify my installer's integrity?">
             To ensure that your downloaded installer has not been tampered with or corrupted, generate its SHA-256 hash value and compare that hash to the official hash provided in the archive.

             1. Open Terminal and run the following command:

                ```
                # Replace <FILE_NAME> with the path to your installer
                shasum -a 256 <FILE_NAME>
                ```

                For example:

                ```
                shasum -a 256 ~/Downloads/Miniconda3-latest-MacOSX-arm64.sh
                ```
             2. Note the generated SHA-256 hash value from the output.
             3. Visit [repo.anaconda.com/miniconda](https://repo.anaconda.com/miniconda/) to find the official SHA-256 hash for your installer.
             4. Compare the hash values. If they match, the installer is safe to use.

             <Tip>
               For more information, see [cryptographic hash verification](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#cryptographic-hash-verification) in the official conda documentation.
             </Tip>
           </Accordion>

        3. Install by running the following (depending on your macOS architecture):

           <CodeGroup>
             ```sh Apple Silicon
             bash ~/Miniconda3-latest-MacOSX-arm64.sh
             ```

             ```sh Intel
             bash ~/Miniconda3-latest-MacOSX-x86_64.sh
             ```
           </CodeGroup>

        4. Press Return to review [Miniconda's End User License Agreement (EULA)](https://www.anaconda.com/legal/terms/miniconda). You can view Anaconda's Terms of Service (TOS) at [https://www.anaconda.com/legal](https://www.anaconda.com/legal).

        5. Enter `yes` to agree to the EULA.

        6. Press Return to accept the default install location (`PREFIX=/Users/<USER>/miniconda3`), or enter another file path to specify an alternate installation directory. The installation might take a few minutes to complete.

        7. Choose an initialization options:

           * Yes - `conda` modifies your shell configuration to initialize conda whenever you open a new shell and to recognize conda commands automatically.
           * No - `conda` will not modify your shell scripts. After installation, if you want to initialize, you must do so manually. For more information, see [Manual shell initialization](#miniconda-manual-shell-init-macos).

        8. The installer finishes and displays, "Thank you for installing Miniconda3!"

        9. Close and re-open your terminal window for the installation to fully take effect, or use the following command to refresh the terminal:

           ```sh
           source ~/.zshrc
           ```

           <Note>
             You should see `(base)` in the command line prompt. This tells you that you're in your base conda environment. To learn more about environments, see [Environments](/getting-started/working-with-conda/environments).
           </Note>

        10. Test your installation by running `conda list`. If conda has been installed correctly, a list of installed packages appears.

        <Accordion title="Manual shell initialization">
          Once installation has successfully completed, initialize your shell by running the following command:

          ```sh
          # Replace <PATH_TO_CONDA> with the path to your conda install
          source <PATH_TO_CONDA>/bin/activate
          conda init --all
          ```

          If you want to specify the shell to initialize (macOS 10.15 and later use `zsh` as the default shell, for example), see [conda init](https://docs.conda.io/projects/conda/en/stable/commands/init.html) in the official conda documentation for a list of supported shells.

          <Note>
            Using `conda init` modifies some of your shell configuration files, such as `.bash_profile` or `.zshrc`. To test which files `conda init` is going to modify on your system, run the command with the `--dry-run` flag.

            ```sh
            conda init --all --dry-run
            ```

            Including `--dry-run` prevents conda from making any actual file updates.
          </Note>
        </Accordion>

        For information on installing in silent mode, see the [Quick command line install](#quickstart-install-instruction) commands for examples or the Installing in silent mode section of [Installing on macOS](https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html#install-macos-silent) in the conda project documentation.
      </Tab>

      <Tab title="Linux terminal installer">
        1. Download the latest version of Miniconda by opening a terminal and running one of the following commands (depending on your Linux architecture):

           <Tabs>
             <Tab title="Linux x86">
               ```sh
               wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
               ```
             </Tab>

             <Tab title="AWS Graviton2/ARM64">
               ```sh
               wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
               ```

               * The `linux-aarch64` package builds might not be compatible with certain Raspberry Pi setups, as Anaconda uses compiler options that target the server-class Neoverse N1/N2 microarchitecture.
             </Tab>

             <Tab title="IBMZ/LinuxOne/s390x">
               ```sh
               wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-s390x.sh
               ```
             </Tab>
           </Tabs>

           <Accordion title="To download a different version">
             View a full list of Miniconda installers in the official [Miniconda archive](https://repo.anaconda.com/miniconda/).

             To download a different version of Miniconda, copy the **Filename** of an installer from the archive, then download it using a `wget` command:

             ```sh
             # Replace <FILENAME> with the installer Filename you copied from the archive
             wget https://repo.anaconda.com/miniconda/<FILENAME>
             ```

             <Danger>
               Ensure that you are downloading an installer that is compatible with your operating system!
             </Danger>
           </Accordion>

        2. (Optional) Anaconda recommends verifying the integrity of the installer after downloading it.

           <Accordion title="How do I verify my installer's integrity?">
             To ensure that your downloaded installer has not been tampered with or corrupted, generate its SHA-256 hash value and compare that hash to the official hash provided in the archive.

             1. Open Terminal and run the following command:

                ```sh
                # Replace <FILE_NAME> with the path to your installer
                sha256sum <FILE_NAME>

                ```

                For example:

                ```sh
                sha256sum ~/Downloads/Miniconda3-latest-Linux-x86_64.sh

                ```
             2. Note the generated SHA-256 hash value from the output.
             3. Visit [repo.anaconda.com/miniconda](https://repo.anaconda.com/miniconda/) to find the official SHA-256 hash for your installer.
             4. Compare the hash values. If they match, the installer is safe to use.

             <Tip>
               For more information, see [cryptographic hash verification](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#cryptographic-hash-verification) in the official conda documentation.
             </Tip>
           </Accordion>

        3. Install Miniconda by running one of the following commands (depending on your Linux architecture):

           <CodeGroup>
             ```sh Linux x86
             bash ~/Miniconda3-latest-Linux-x86_64.sh
             ```

             ```sh AWS Graviton2/ARM64
             bash ~/Miniconda3-latest-Linux-aarch64.sh
             ```

             ```sh IBMZ/LinuxOne/s390x
             bash ~/Miniconda3-latest-Linux-s390x.sh
             ```
           </CodeGroup>

           <Warning>
             The `linux-aarch64` package builds might not be compatible with certain Raspberry Pi setups, as Anaconda uses compiler options that target the server-class Neoverse N1/N2 microarchitecture.
           </Warning>

        4. Press Return to review [Miniconda's End User License Agreement (EULA)](https://www.anaconda.com/legal/terms/miniconda). You can view Anaconda's Terms of Service (TOS) at [https://www.anaconda.com/legal](https://www.anaconda.com/legal).

        5. Enter `yes` to agree to the EULA.

        6. Press Return to accept the default install location (`PREFIX=/Users/<USER>/miniconda3`), or enter another file path to specify an alternate installation directory. The installation might take a few minutes to complete.

        7. Choose an initialization options:

           * Yes - `conda` modifies your shell configuration to initialize conda whenever you open a new shell and to recognize conda commands automatically.
           * No - `conda` will not modify your shell scripts. After installation, if you want to initialize, you must do so manually. For more information, see [Manual shell initialization](#miniconda-manual-shell-init-linux).

        8. The installer finishes and displays, "Thank you for installing Miniconda3!"

        9. Close and re-open your terminal window for the installation to fully take effect, or use the following command to refresh the terminal, depending on your shell:

           <CodeGroup>
             ```sh Bash
             source ~/.bashrc
             ```

             ```sh Zsh
             source ~/.zshrc

             ```

             ```sh Fish
             exec fish
             ```
           </CodeGroup>

           <Note>
             You should see `(base)` in the command line prompt. This tells you that you're in your base conda environment. To learn more about environments, see [Environments](/getting-started/working-with-conda/environments).
           </Note>

        10. Test your installation by running `conda list`. If conda has been installed correctly, a list of installed packages appears.

        <Accordion title="Manual shell initialization">
          Once installation has successfully completed, initialize your shell by running the following command:

          ```sh
          # Replace <PATH_TO_CONDA> with the path to your conda install
          source <PATH_TO_CONDA>/bin/activate
          conda init --all
          ```

          <Note>
            Using `conda init` modifies some of your shell configuration files, such as `.bash_profile` or `.zshrc`. To test which files `conda init` is going to modify on your system, run the command with the `--dry-run` flag.

            ```sh
            conda init --all --dry-run
            ```

            Including `--dry-run` prevents conda from making any actual file updates.
          </Note>
        </Accordion>

        For information on installing in silent mode, see the [Quick command line install](#quickstart-install-instruction) commands for examples or the Installing in silent mode section of [Installing on macOS](https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html#install-macos-silent) in the conda project documentation.
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="Verify your install">
    Verify your installation of Miniconda by using the CLI:

    1. Access the CLI for your operating system:

       <Tabs>
         <Tab title="Windows">
           1. Search for "Anaconda Prompt" in the taskbar search.
           2. Select **Anaconda Prompt**.
         </Tab>

         <Tab title="macOS">
           1. Use Cmd+Spacebar to open Spotlight Search.
           2. Type "Terminal" and press Return to open.
         </Tab>

         <Tab title="Linux">
           1. In most Linux distributions, use Ctrl+Alt+T to open a terminal application.
         </Tab>
       </Tabs>

       You should see `(base)` in the command line prompt. This tells you that you're in your base conda environment. To learn more about environments, see [Environments](/getting-started/working-with-conda/environments).
    2. Run any conda command. For example:

       * `conda list` - Displays a list of packages installed in your active environment and their versions.
       * `conda --version` - Displays `conda`'s version number.
  </Accordion>
</AccordionGroup>

## Quickstart install instructions

These command line instructions will get you set up quickly with the latest Miniconda installer. Follow the steps for your system to download and install Miniconda, then follow the steps in **Verify your install** above to verify your Miniconda installation.

<Warning>
  These quick install commands run a silent install. If you run a silent install, you are accepting Anaconda's Terms of Service (TOS) by default. Please make sure to review Anaconda's full TOS [here](https://anaconda.com/legal) before proceeding with silent installations.
</Warning>

<Tabs>
  <Tab title="Windows Command Prompt">
    These three commands quickly and quietly download the latest 64-bit Windows installer, rename it to a shorter file name, perform a silent install, and then delete the installer:

    ```sh
    curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe -o .\miniconda.exe
    start /wait "" .\miniconda.exe /S
    del .\miniconda.exe
    ```

    <Accordion title="To download an older version">
      You can find older versions of the Windows installer at `<https://repo.anaconda.com/miniconda>`.

      For example, to download an older version of Miniconda for Python 3.12 for a 64-bit Windows computer, replace the `curl` command for the latest installer with the following `curl` command instead:

      ```
      curl https://repo.anaconda.com/miniconda/Miniconda3-py312_24.5.0-0-Windows-x86_64.exe -o .\miniconda.exe
      ```
    </Accordion>

    After installing, open [Anaconda Prompt](/reference/glossary#anaconda-prompt) to use Miniconda.
  </Tab>

  <Tab title="Windows PowerShell">
    These three commands quickly and quietly download the latest 64-bit Windows installer, rename it to a shorter file name, perform a silent install, and then delete the installer:

    ```powershell
    wget "https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe" -outfile ".\miniconda.exe"
    Start-Process -FilePath ".\miniconda.exe" -ArgumentList "/S" -Wait
    del .\miniconda.exe
    ```

    <Accordion title="To download an older version">
      You can find older versions of the Windows installer at `<https://repo.anaconda.com/miniconda/>`.

      For example, to download an older version of Miniconda for Python 3.12 for a 64-bit Windows computer, replace the `wget` command for the latest installer with the following `wget` command instead:

      ```
      wget "https://repo.anaconda.com/miniconda/Miniconda3-py312_24.5.0-0-Windows-x86_64.exe" -outfile ".\miniconda.exe"
      ```
    </Accordion>

    After installing, open [Anaconda Powershell Prompt](/reference/glossary#anaconda-prompt) to use Miniconda.
  </Tab>

  <Tab title="macOS">
    1. Run the following four commands to download and install the latest macOS installer for your chosen chip architecture. Line by line, these commands:

       * create a new directory named "miniconda3" in your home directory.
       * download the macOS Miniconda installation script for your chosen chip architecture and save the script as `miniconda.sh` in the miniconda3 directory.
       * run the `miniconda.sh` installation script in silent mode using bash.
       * remove the `miniconda.sh` installation script file after installation is complete.

       <CodeGroup>
         ```sh Apple Silicon
         mkdir -p ~/miniconda3
         curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
         bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
         rm ~/miniconda3/miniconda.sh
         ```

         ```sh Intel
         mkdir -p ~/miniconda3
         curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
         bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
         rm ~/miniconda3/miniconda.sh
         ```
       </CodeGroup>

       <Accordion title="To download an older version">
         You can find different versions of the macOS installer at `<https://repo.anaconda.com/miniconda>`.

         For example, to download an older version of Miniconda for Python 3.12 for an M1 macOS computer, replace the `curl` command for the latest installer with the following `curl` command instead:

         ```sh
         curl https://repo.anaconda.com/miniconda/Miniconda3-py312_24.5.0-0-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
         ```

         Or to download an older version of Miniconda for Python 3.9 for an Intel chip macOS computer, replace the `curl` command for the latest installer with the following `curl` command instead:

         ```sh
         mkdir -p ~/miniconda3
         curl https://repo.anaconda.com/miniconda/Miniconda3-py39_24.5.0-0-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
         ```
       </Accordion>

    2. After installing, close and reopen your terminal application or refresh it by running the following command:

       ```sh
       source ~/miniconda3/bin/activate
       ```

    3. Then, initialize conda on all available shells by running the following command:

       ```sh
       conda init --all
       ```

       <Note>
         Using `conda init` modifies some of your shell configuration files, such as `.bash_profile` or `.zshrc`. To test which files `conda init` is going to modify on your system, run the command with the `--dry-run` flag.

         ```sh
         conda init --all --dry-run
         ```

         Including `--dry-run` prevents conda from making any actual file updates.
       </Note>

    If you don't initialize conda after installation, you might see a "conda not found" error, even though conda is installed. See the [Conda: command not found on macOS/Linux](../../reference/troubleshooting/#conda-cmd-not-found) troubleshooting topic for possible solutions.
  </Tab>

  <Tab title="Linux">
    1. Run the following four commands to download and install the latest Linux installer for your chosen chip architecture. Line by line, these commands:

       * create a new directory named "miniconda3" in your home directory.
       * download the Linux Miniconda installation script for your chosen chip architecture and save the script as `miniconda.sh` in the miniconda3 directory.
       * run the `miniconda.sh` installation script in silent mode using bash.
       * remove the `miniconda.sh` installation script file after installation is complete.

       <CodeGroup>
         ```sh 64-bit
         mkdir -p ~/miniconda3
         wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
         bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
         rm ~/miniconda3/miniconda.sh
         ```

         ```sh AWS Graviton 2/ARM 64
         mkdir -p ~/miniconda3
         wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
         bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
         rm ~/miniconda3/miniconda.sh
         ```

         ```sh IBM Z
         mkdir -p ~/miniconda3
         wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-s390x.sh -O ~/miniconda3/miniconda.sh
         bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
         rm ~/miniconda3/miniconda.sh
         ```
       </CodeGroup>

       <Accordion title="To download an older version">
         You can find different versions of the Linux installer at `<https://repo.anaconda.com/miniconda>`.

         For example, to download an older version of Miniconda for Python 3.12 for an 64-bit version of Linux, replace the `wget` command for the latest installer with the following `wget` command instead:

         ```sh
         wget https://repo.anaconda.com/miniconda/Miniconda3-py312_24.5.0-0-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
         ```
       </Accordion>

    2. After installing, close and reopen your terminal application or refresh it by running the following command:

       ```sh
       source ~/miniconda3/bin/activate
       ```

    3. Then, initialize conda on all available shells by running the following command:

       ```sh
       conda init --all
       ```

       <Note>
         Using `conda init` modifies some of your shell configuration files, such as `.bash_profile` or `.zshrc`. To test which files `conda init` is going to modify on your system, run the command with the `--dry-run` flag.

         ```sh
         conda init --all --dry-run
         ```

         Including `--dry-run` prevents conda from making any actual file updates.
       </Note>

    If you don't initialize conda after installation, you might see a "conda not found" error, even though conda is installed. See the [Conda: command not found on macOS/Linux](../../reference/troubleshooting/#conda-cmd-not-found) troubleshooting topic for possible solutions.
  </Tab>
</Tabs>
</Tab>
>> end
###
-----------------------------------------
###
🪾Because Python was a vaste of ⏱ur time!𓅓
###
[]=[""|""|""]) >---
###
{https://www.anaconda.com/download/success}
###
✅✳️
