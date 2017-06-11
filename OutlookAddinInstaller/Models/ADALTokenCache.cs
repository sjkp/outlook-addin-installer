using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace OutlookAddinInstaller
{
    internal class ADALTokenCache : TokenCache
    {
        private string signInUserId;

        public ADALTokenCache(string signInUserId)
        {
            this.signInUserId = signInUserId;
        }
    }
}