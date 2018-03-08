@echo off
title Script Commit/Push ou Pull 
mode con cols=120 lines=20

:INTRODUCAO
	echo.
	echo.
	echo.
	echo		================================== * * * * * * * * * * ====================================
	echo		================================== * * * * * * * * * * ====================================
	echo		=**	       			 							**=
	echo		=** Bem vindo,				  						**=
	echo		=** Essa batch tem como objetivo auxilia-lo em commit/push e pull do GitHub   		**=
        echo		=** instalacao de drivers e softwares basicos e essenciais				**=
	echo		=**                                                  					**=
	echo		=**	                                                				**=
	echo		=** By Lucas Miranda                              					**=
	echo		=**				           						**=
	echo		================================== * * * * * * * * * * ====================================
	echo		================================== * * * * * * * * * * ====================================
	echo.
	echo.
	echo.
	@pause

:MENU_PRINCIPAL
	cls
	echo.
	echo.
	echo. 
	echo		====================== * * * * * * * * * * ========================
	echo		=**	       			 				**=
	echo		=** 			  MENU PRINCIPAL			**=
	echo		=** 						   		**=
	echo		====================== * * * * * * * * * * ========================
	echo		=**                                                  		**=
	echo		=**	1. COMMITAR Repositorio Leo	                      	**=
	echo		=** 	2. COMMITAR Repositorio Lucas				**=
	echo		=**	3. PULL Repositorio Leo           			**=
	echo		=**	4. PULL Repositorio Lucas           			**=
	echo		=**				           			**=
	echo		====================== * * * * * * * * * * ========================
	echo.
	echo.
	echo.
	set /p CHOICE= ESCOLHA UMA DAS OPCOES:
	IF [%CHOICE%]==[1] GOTO PUSH_LEO
	IF [%CHOICE%]==[2] GOTO PUSH_LUCAS
	IF [%CHOICE%]==[3] GOTO PULL_LEO
	IF [%CHOICE%]==[4] GOTO PULL_LUCAS
	echo.
	echo.
	echo [%CHOICE%] Opcao invalida. Tente novamente..
	echo.
	@pause
	goto :MENU_PRINCIPAL

--------------------------------------------------------------------------------------------------


:PUSH_LEO
	rd /s /q  "C:\Users\lmolinam\Desktop\Git\Indra\Angular 2\Arquivos de Aprendizado\DigitalDeskSantander"
	mkdir "C:\Users\lmolinam\Desktop\Git\Indra\Angular 2\Arquivos de Aprendizado\DigitalDeskSantander"
	ROBOCOPY "C:\Users\lmolinam\Documents\Projetos\DigitalDeskSantander" "C:\Users\lmolinam\Desktop\Git\Indra\Angular 2\Arquivos de Aprendizado\DigitalDeskSantander" /E /XD node_modules
	cls
	cd C:\Users\lmolinam\Desktop\Git\Indra
	echo.
	git add *
	cls
	git commit -m "New Commit"
	git push
	echo
	echo Commitado com Sucesso...
	echo.
	pause
	GOTO :exit
:PUSH_LUCAS
	rd /s /q  "C:\Users\lmolinam\Desktop\Git\Lucas\DigitalDeskSantander"
	mkdir "C:\Users\lmolinam\Desktop\Git\Lucas\DigitalDeskSantander"
	ROBOCOPY "C:\Users\lmolinam\Documents\Projetos\DigitalDeskSantander" "C:\Users\lmolinam\Desktop\Git\Lucas\DigitalDeskSantander" /E /XD node_modules
	cls
	cd C:\Users\lmolinam\Desktop\Git\Lucas
	echo.
	git add *
	cls
	git commit -m "New Commit"
	git push
	echo
	echo Commitado com Sucesso...
	echo.
	pause
	GOTO :exit
:PULL_LEO
	cls
	cd C:\Users\lmolinam\Desktop\Git\Indra
	echo.
	git pull origin master
	echo
	echo Update Local Efetuado com Sucesso!
	echo.
	pause
	start explorer.exe "C:\Users\lmolinam\Desktop\Git\Indra\Angular 2\Arquivos de Aprendizado\DigitalDeskSantander"
	GOTO :exit
:PULL_LUCAS
	cls
	cd C:\Users\lmolinam\Desktop\Git\Lucas
	echo.
	git pull
	echo
	echo Update Local Efetuado com Sucesso!
	echo.
	pause
	start explorer.exe "C:\Users\lmolinam\Desktop\Git\Lucas\DigitalDeskSantander"
	GOTO :exit
:EXIT
	exit