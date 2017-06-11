using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.VisualStudio.SharePoint.Tasks;
using Microsoft.VisualStudio.SharePoint;
using Microsoft.Build.Framework;
using Rhino.Mocks;
using System.Xml.Schema;
using System.Xml;
using System.IO;
using System.Xml.Linq;

namespace OutlookAddinValidate.Test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        { 
            MockRepository mock = new MockRepository();

            IBuildEngine engine = MockRepository.GenerateStub<IBuildEngine>();
            //engine.Expect(s => s.LogMessageEvent(Arg<BuildMessageEventArgs>.Is.Anything));
            //mock.ReplayAll();
            
            engine.Stub(s => s.LogMessageEvent(Arg<BuildMessageEventArgs>.Is.Anything)).IgnoreArguments().WhenCalled(x =>
            {
                var evt = x.Arguments[0] as BuildMessageEventArgs;
                Console.WriteLine(evt.Message);
            });

            engine.Stub(s => s.LogWarningEvent(Arg<BuildWarningEventArgs>.Is.Anything)).IgnoreArguments().WhenCalled(x =>
            {
                var evt = x.Arguments[0] as BuildWarningEventArgs;
                Console.WriteLine(evt.Message);
            });

            engine.Stub(s => s.LogErrorEvent(Arg<BuildErrorEventArgs>.Is.Anything)).IgnoreArguments().WhenCalled(x =>
            {
                var evt = x.Arguments[0] as BuildErrorEventArgs;
                Console.WriteLine(evt.Message);
            });

            engine.LogMessageEvent(new BuildMessageEventArgs("test", "test", "test", MessageImportance.High));
            //mock.VerifyAll();

            Assert.AreNotEqual("", Environment.GetEnvironmentVariable("VisualStudioVersion"));

            //engine.Stub(s => s.ProjectFileOfTaskNode).Return("hulla");

            var validator = new ValidateOfficeAppManifest();
            validator.BuildEngine = engine;
            validator.ManifestFilePaths = new[] { @"C:\projects\kr-addin\OutlookAddin\bin\Debug\app.publish\OfficeAppManifests\OutlookAddinManifest.xml" };
            validator.WebProjectPaths = new string[] { @"C:\projects\kr-addin\OutlookAddinWeb\OutlookAddinWeb.csproj" };
            validator.ProjectMode = SharePointProjectMode.MailApp.ToString();
            Assert.IsNotNull(validator.Log); 
            
            var res = validator.Execute();
            
        }

        [TestMethod]
        public void SchemaValidator()
        {
            var schema = GetSchema(@"C:\projects\kr-addin\OutlookAddinValidate.Test\offappmanifest-1.1.xsd");
            string rawXml = File.ReadAllText(@"C:\projects\kr-addin\OutlookAddin\bin\Debug\app.publish\OfficeAppManifests\OutlookAddinManifest.xml");
            XmlSchemaSet xmlSchemaSet = new XmlSchemaSet();
            xmlSchemaSet.Add(schema);
            XmlReaderSettings xmlReaderSettings = new XmlReaderSettings();
            xmlReaderSettings.Schemas = xmlSchemaSet;
            xmlReaderSettings.ValidationType = ValidationType.Schema;
            XmlReaderSettings settings = xmlReaderSettings;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ReportValidationWarnings;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;

            settings.ValidationEventHandler += Settings_ValidationEventHandler;
            using (StringReader stringReader = new StringReader(rawXml))
            {
                using (XmlReader reader = XmlReader.Create((TextReader)stringReader, settings))
                    XDocument.Load(reader);
            }
        }

        public XmlSchema GetSchema(string schemaFile)
        {
            using (XmlReader reader = XmlReader.Create(schemaFile))
            {
                return XmlSchema.Read(reader, null);
            }
        }

        private void Settings_ValidationEventHandler(object sender, ValidationEventArgs e)
        {
            Console.Write(e.Message);
        }
    }
}
