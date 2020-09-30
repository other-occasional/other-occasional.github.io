//----------------------------------------------------------------------------
//
//  $Id: PrintLabel.js 38773 2015-09-17 11:45:41Z nmikalko $ 
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework
//
// Content -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library Samples: Print label
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------


(function()
{
    // called when the document completly loaded
    function onload()
    {
        var textTextArea = document.getElementById('textTextArea');
        
        /*
        var printButton = document.getElementById('printButton');
        // prints the label
        printButton.onclick = function()
        {
            try
            {
                // open label
                var labelXml = '<?xml version="1.0" encoding="utf-8"?><DieCutLabel Version="8.0" Units="twips" MediaType="Default">  <PaperOrientation>Landscape</PaperOrientation>  <Id>Small30333</Id>  <PaperName>30333 1/2 in x 1 in (2 up)</PaperName>  <DrawCommands>    <Path>      <FillMode>EvenOdd</FillMode>      <RoundRectangle X="0" Y="0" Width="720" Height="1440" Rx="180" Ry="180"/>      <RoundRectangle X="720" Y="0" Width="720" Height="1440" Rx="180" Ry="180"/>    </Path>  </DrawCommands>  <ObjectInfo>    <TextObject>      <Name>Text</Name>      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>      <LinkedObjectName></LinkedObjectName>      <Rotation>Rotation0</Rotation>      <IsMirrored>False</IsMirrored>      <IsVariable>True</IsVariable>      <HorizontalAlignment>Left</HorizontalAlignment>      <VerticalAlignment>Middle</VerticalAlignment>      <TextFitMode>ShrinkToFit</TextFitMode>      <UseFullFontHeight>True</UseFullFontHeight>      <Verticalized>False</Verticalized>      <StyledText>        <Element>          <String>1234567</String>          <Attributes>            <Font Family="Arial" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False"/>            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>          </Attributes>        </Element>      </StyledText>    </TextObject>    <Bounds X="134.1023" Y="90.70866" Width="1218.898" Height="527.2441"/>  </ObjectInfo>  <ObjectInfo>    <TextObject>      <Name>Bottom Text</Name>      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>      <LinkedObjectName></LinkedObjectName>      <Rotation>Rotation0</Rotation>      <IsMirrored>False</IsMirrored>      <IsVariable>True</IsVariable>      <HorizontalAlignment>Left</HorizontalAlignment>      <VerticalAlignment>Middle</VerticalAlignment>      <TextFitMode>ShrinkToFit</TextFitMode>      <UseFullFontHeight>True</UseFullFontHeight>      <Verticalized>False</Verticalized>      <StyledText>        <Element>          <String>Click here to enter text</String>          <Attributes>            <Font Family="Helvetica" Size="13" Bold="False" Italic="False" Underline="False" Strikeout="False"/>            <ForeColor Alpha="255" Red="153" Green="153" Blue="153"/>          </Attributes>        </Element>      </StyledText>    </TextObject>    <Bounds X="134.1023" Y="785.4016" Width="1218.898" Height="572.5984"/>  </ObjectInfo></DieCutLabel>';
                var label = dymo.label.framework.openLabelXml(labelXml);

                // set label text
                label.setObjectText("Text", textTextArea.value);
                
                // select printer to print on
                // for simplicity sake just use the first LabelWriter printer
                var printers = dymo.label.framework.getPrinters();
                if (printers.length == 0)
                    throw "No DYMO printers are installed. Install DYMO printers.";

                var printerName = "";
                for (var i = 0; i < printers.length; ++i)
                {
                    var printer = printers[i];
                    if (printer.printerType == "LabelWriterPrinter")
                    {
                        printerName = printer.name;
                        break;
                    }
                }
                
                if (printerName == "")
                    throw "No LabelWriter printers found. Install LabelWriter printer";

                // finally print the label
                label.print(printerName);
            }
            catch(e)
            {
                alert(e.message || e);
            }
        }
    */
    };
   function initTests()
	{

        /*
        $('#slidervalue').text($('#slider').val());   
        $('#printarea').css('font-size', $('#slider').val() + 'pt');
        $('#slider').on('input', function() {
          var v = $(this).val();
          $('#printarea').css('font-size', v + 'pt');
          $('#slidervalue').text(v);
        });
        
        $('#marginvalue').text($('#slider-margin').val()); 
        $("#printarea").css('padding-left', $('#slider-margin').val() + 'pt');
        $('#slider-margin').on('input', function() {
          console.log("slider margin")
          var v = $(this).val();
          $('#printarea').css('padding-left', v + 'pt');
          $('#marginvalue').text(v);
        });
        */
		if(dymo.label.framework.init)
		{
            setKeyHandler()
			//dymo.label.framework.trace = true;
			dymo.label.framework.init(onload);
		} else {
			onload();
            setKeyHandler();
		}
	}
    function printNumberDymo() {
        var  itemid = window.numQueue.join("")
                   try
            {
                // open label
                var labelXml = '<?xml version="1.0" encoding="utf-8"?><DieCutLabel Version="8.0" Units="twips" MediaType="Default">  <PaperOrientation>Landscape</PaperOrientation>  <Id>Small30333</Id>  <PaperName>30333 1/2 in x 1 in (2 up)</PaperName>  <DrawCommands>    <Path>      <FillMode>EvenOdd</FillMode>      <RoundRectangle X="0" Y="0" Width="720" Height="1440" Rx="180" Ry="180"/>      <RoundRectangle X="720" Y="0" Width="720" Height="1440" Rx="180" Ry="180"/>    </Path>  </DrawCommands>  <ObjectInfo>    <TextObject>      <Name>Text</Name>      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>      <LinkedObjectName></LinkedObjectName>      <Rotation>Rotation0</Rotation>      <IsMirrored>False</IsMirrored>      <IsVariable>True</IsVariable>      <HorizontalAlignment>Left</HorizontalAlignment>      <VerticalAlignment>Middle</VerticalAlignment>      <TextFitMode>ShrinkToFit</TextFitMode>      <UseFullFontHeight>True</UseFullFontHeight>      <Verticalized>False</Verticalized>      <StyledText>        <Element>          <String>1234567</String>          <Attributes>            <Font Family="Arial" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False"/>            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>          </Attributes>        </Element>      </StyledText>    </TextObject>    <Bounds X="134.1023" Y="90.70866" Width="1218.898" Height="527.2441"/>  </ObjectInfo>  <ObjectInfo>    <TextObject>      <Name>Bottom Text</Name>      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>      <LinkedObjectName></LinkedObjectName>      <Rotation>Rotation0</Rotation>      <IsMirrored>False</IsMirrored>      <IsVariable>True</IsVariable>      <HorizontalAlignment>Left</HorizontalAlignment>      <VerticalAlignment>Middle</VerticalAlignment>      <TextFitMode>ShrinkToFit</TextFitMode>      <UseFullFontHeight>True</UseFullFontHeight>      <Verticalized>False</Verticalized>      <StyledText>        <Element>          <String>Click here to enter text</String>          <Attributes>            <Font Family="Helvetica" Size="13" Bold="False" Italic="False" Underline="False" Strikeout="False"/>            <ForeColor Alpha="255" Red="153" Green="153" Blue="153"/>          </Attributes>        </Element>      </StyledText>    </TextObject>    <Bounds X="134.1023" Y="785.4016" Width="1218.898" Height="572.5984"/>  </ObjectInfo></DieCutLabel>';
                var label = dymo.label.framework.openLabelXml(labelXml);

                // set label text
                label.setObjectText("Text", itemid);
                
                // select printer to print on
                // for simplicity sake just use the first LabelWriter printer
                var printers = dymo.label.framework.getPrinters();
                if (printers.length == 0)
                    throw "No DYMO printers are installed. Install DYMO printers.";

                var printerName = "";
                for (var i = 0; i < printers.length; ++i)
                {
                    var printer = printers[i];
                    if (printer.printerType == "LabelWriterPrinter")
                    {
                        printerName = printer.name;
                        break;
                    }
                }
                
                if (printerName == "")
                    throw "No LabelWriter printers found. Install LabelWriter printer";

                // finally print the label
                label.print(printerName);
            }
            catch(e)
            {
                alert(e.message || e);
            }

    }

    function setText() {
        //ignore random keystrokes
        if (window.numQueue.length<6) {
            window.numQueue = [];
            return
        }
        document.getElementById("printarea").innerHTML = ""
        document.getElementById("printarea").appendChild(ElementFromText( window.numQueue))
        window.numQueue=[];
        window.print()
    }


    function ElementFromText(scannedText) {
        var infodiv = document.createElement("div")
        
        scannedText = scannedText.split(";")
        for (i=0;i<scannedText.length;i++) {
            var line = scannedText[i];

            if (!line.search("SSID"))    {
                scannedText[i] = scannedText[i].replace("Telia_","Zyxel_");
            }   

            var finalLine = document.createElement("div");
            finalLine.innerHTML = scannedText[i];
            infodiv.appendChild(finalLine);
        }
        return infodiv
    }


    function setKeyHandler() {
        //rewrote conditions so all characters are accepted
        window.queueFunction = function() {}
        window.numQueue = ""
        document.onkeydown = function(e) {
            window.clearTimeout(window.queueFunction)
                
            window.queueFunction =window.setTimeout(setText,1000)
            if ((e.key != "Shift")&&(e.key != "Enter")) {
                numQueue += (e.key)
            }


        }

    }

	// register onload event
	if (window.addEventListener)
		window.addEventListener("load", initTests, false);
	else if (window.attachEvent)
		window.attachEvent("onload", initTests);
	else
		window.onload = initTests;

} ());