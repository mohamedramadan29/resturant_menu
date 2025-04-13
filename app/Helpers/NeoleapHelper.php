<?php
namespace App\Helpers;

use phpseclib3\Crypt\AES;

class NeoleapHelper
{
    public static function encryptTrandata(array $data, $resourceKey)
    {
        $iv = "PGKEYENCDECIVSPC";

        $aes = new AES('cbc');
        $aes->setIV($iv);
        $aes->setKey($resourceKey);

        $plaintext = json_encode($data, JSON_UNESCAPED_UNICODE);
        $ciphertext = $aes->encrypt($plaintext);

        return base64_encode($ciphertext);
    }

    public static function decryptTrandata($trandata, $resourceKey)
    {
        $iv = "PGKEYENCDECIVSPC";

        $aes = new AES('cbc');
        $aes->setIV($iv);
        $aes->setKey($resourceKey);

        $decrypted = $aes->decrypt(base64_decode($trandata));
        return json_decode($decrypted, true);
    }
}
