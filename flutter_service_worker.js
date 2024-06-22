'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c00a9a2fdbbcf30d3437d59ed3a0d5a8",
"assets/AssetManifest.bin.json": "87f685e27ac6a921ded708a15df31b30",
"assets/AssetManifest.json": "1cd0614bb805e54013e756a86e4b04db",
"assets/assets/images/account.png": "cae44dff346a7f96e1dd91f6cd51ded8",
"assets/assets/images/bg_decore.png": "57640afa197cdd84ba4911744afdc9f7",
"assets/assets/images/bg_stars.png": "9cdee025ab9e78bce2222cb110dc3f43",
"assets/assets/images/business.png": "e89c66bc37ab6766cfe874fcbb7c81ef",
"assets/assets/images/camera.png": "6e82926d6a5080a746ca07b867b58a7f",
"assets/assets/images/checkmark.png": "9396d20a4257bd131718aaefbfdc3b62",
"assets/assets/images/close.png": "ff3b1545e8030c514501b1452d136979",
"assets/assets/images/coat_arm.png": "846c5ccf107209afbbd4d445f8b4cfd5",
"assets/assets/images/confirmed_student.png": "85f581018ccb17ca326f3467bd199a0b",
"assets/assets/images/country.png": "09f313a58f984e9268457b6da8895db2",
"assets/assets/images/credit.png": "873c6433dcd31185dce32df5e4c6dd56",
"assets/assets/images/credit_card.png": "414d95e1a4d1254583abe55e6a55d150",
"assets/assets/images/cursor.png": "7eb00ff6d01829a9b413fa183862c907",
"assets/assets/images/dashboard.png": "a20651363cb7a8ce3c6cf35402784540",
"assets/assets/images/database.png": "fcfece132b495720a34065715bbf9461",
"assets/assets/images/decore.png": "4aea9b2f75c3da2697c30d420cfc9e87",
"assets/assets/images/drop_down.png": "8035b401c356c97d504bb4c12b00e20f",
"assets/assets/images/embassy.png": "a7449d882734baff8c04092690e68465",
"assets/assets/images/embassy_icon.png": "4e5b3aa493ef95566ca50d3e0195a8e3",
"assets/assets/images/fail.png": "ddafeeb70a68084e06c2e0417d85d6dd",
"assets/assets/images/fb.png": "6f64d5397b00af24ea81a8a44f162236",
"assets/assets/images/file.png": "a3ac375286301942425d99cad5883677",
"assets/assets/images/image.png": "85104d6c3c392ab9b500a58a78ffb586",
"assets/assets/images/institution.png": "0dbb8f59b2a0fae78784b8334043a52c",
"assets/assets/images/institution_icon.png": "b72ef698dd3bd3618fcbd9e9731e307d",
"assets/assets/images/istg.png": "47f2d2735114a57236daa2c6d0dbf053",
"assets/assets/images/landing_page_student.png": "622ad4c6274318e63c5120329fe9eaf8",
"assets/assets/images/link_forward.png": "eba6b322a1667cbf3c432e85d0440b61",
"assets/assets/images/lnkd.png": "db9227fc37a87670593fbe9dd5c9f674",
"assets/assets/images/loading.png": "9fe21cfde8968cb0b13f49da988f8cc6",
"assets/assets/images/logo.png": "41c8613c27101dda3d42dcdb4d76873f",
"assets/assets/images/logout.png": "c61cba1ea74c191e8968f9beb2f7b716",
"assets/assets/images/logo_small.png": "a48f9f7205c4c8795b482fbd8d5f70c0",
"assets/assets/images/mastercard.png": "a777daddedd5622401dfaf89bcab6b82",
"assets/assets/images/notification.png": "98a01dc20405f3583de80f24a5ac06b6",
"assets/assets/images/nysc.png": "01deb78ccdd8fe1cc665bfef545c7eb1",
"assets/assets/images/search.png": "d6e9c00259f80d85f5e702e817a8719c",
"assets/assets/images/settings.png": "c5718e44784b29a4c2a656359bd90c1c",
"assets/assets/images/student.png": "32d90fa03606975e237571078fc449ed",
"assets/assets/images/student_bg.png": "1681d1b0f0210c6cf877a91dd70ccdd1",
"assets/assets/images/student_icon.png": "f546dac123759a9ff189b0c99fd5f84f",
"assets/assets/images/success.png": "8fdd83a851ae619b59f617c8efcf81c2",
"assets/assets/images/tick.png": "421b3c2dfea060db2c4cac701b5971a0",
"assets/assets/images/total_student.png": "e7c8c81593055efb1940e9edc874fbb0",
"assets/assets/images/tw.png": "a3cf13e0e8833367cd105d07bef0f03a",
"assets/assets/images/upload.png": "aa22d65891049fd588046d6d785fd2e2",
"assets/assets/images/upload_icon.png": "21d8e87019001e78ebdfc2cd87a10fc7",
"assets/assets/images/user_avatar.png": "840249d4b134e6711ede26df6358090a",
"assets/assets/images/user_avatar_2.png": "ef2309221948c637bf76c87df17b87de",
"assets/assets/images/verified_student.png": "19a714ff835b5f2195f47966cabdb957",
"assets/assets/images/visa.png": "5844652a236cafaf653f86e2119a9a4d",
"assets/assets/images/wave.png": "4d2883b705e929dc0ffc09c0af7cbb3e",
"assets/assets/images/yt.png": "c077e787ba05cf0c9fb73dc5d0f5955b",
"assets/FontManifest.json": "25ed202ca07bfa83d95aae3502447a91",
"assets/fonts/MaterialIcons-Regular.otf": "5bb7199b3b8a07cd8f97273082f3cde9",
"assets/fonts/OpenSans/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/fonts/OpenSans/OpenSans-Light.ttf": "c87e3b21e46c872774d041a71e181e61",
"assets/fonts/OpenSans/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/fonts/OpenSans/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/fonts/OpenSans/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/fonts/Volkhov/Volkhov-Bold.ttf": "f7bda5027eb06d48017511ee194aa57b",
"assets/fonts/Volkhov/Volkhov-Regular.ttf": "26423144a614ecab04ea9817778e4a69",
"assets/NOTICES": "65965f5859ff674ba8e9f07815de7918",
"assets/packages/phone_input/assets/svg/ac.svg": "8ab65b7168da5d0907ece0c811ba27d8",
"assets/packages/phone_input/assets/svg/ad.svg": "8c821c9a108a35aa6bb0935e6cb2d131",
"assets/packages/phone_input/assets/svg/ae.svg": "42d71570eaa84e61032f934cc8296e79",
"assets/packages/phone_input/assets/svg/af.svg": "f12b29db1a215777fd638a32159b72a5",
"assets/packages/phone_input/assets/svg/ag.svg": "56d3f823f1f18d18f172154c08a4f061",
"assets/packages/phone_input/assets/svg/ai.svg": "61c09b79f9b83dca2e696b364721df05",
"assets/packages/phone_input/assets/svg/al.svg": "ee45ea7b84bdeea9e72a9e61549c05d1",
"assets/packages/phone_input/assets/svg/am.svg": "39c5d05ed3ce2660746bf8ea995af707",
"assets/packages/phone_input/assets/svg/an.svg": "0ceac729df9bb062f9f7337f1349741f",
"assets/packages/phone_input/assets/svg/ao.svg": "ec568c38872fc44b91a0db07e51c6158",
"assets/packages/phone_input/assets/svg/aq.svg": "d96624823ceaf3950ba1b197e1f0b99c",
"assets/packages/phone_input/assets/svg/ar.svg": "fb9c6d95f0ce23baadbf6090ffd1ce48",
"assets/packages/phone_input/assets/svg/as.svg": "bbe697d2ff84b5329096b2ecfaffc03e",
"assets/packages/phone_input/assets/svg/at.svg": "8dc68995ec419a9440a25fadc2d8193d",
"assets/packages/phone_input/assets/svg/au.svg": "0af6624d4b0ca5e2348e094d3fe0a4bb",
"assets/packages/phone_input/assets/svg/aw.svg": "15596b183104409beb84f6cba8426b38",
"assets/packages/phone_input/assets/svg/ax.svg": "56a11a1b6f77531867bf5bbf49643297",
"assets/packages/phone_input/assets/svg/az.svg": "403e9b3f84602663476f4139b92916ea",
"assets/packages/phone_input/assets/svg/ba.svg": "a54182e1ba0beb00794a049fb0bb8d35",
"assets/packages/phone_input/assets/svg/bb.svg": "89161f1489c1c83b696a8cd72af75f36",
"assets/packages/phone_input/assets/svg/bd.svg": "e99cb11fdae12d94bce83d228b052dc3",
"assets/packages/phone_input/assets/svg/be.svg": "13b30169c6bf889c94331dc6c9dd94d5",
"assets/packages/phone_input/assets/svg/bf.svg": "4755cc0eeffc214e72703111d483703f",
"assets/packages/phone_input/assets/svg/bg.svg": "a07a2e6e32a2fc51ae685b94fa6ca585",
"assets/packages/phone_input/assets/svg/bh.svg": "86725006a063c2db6d6b0ae08d2a2ae5",
"assets/packages/phone_input/assets/svg/bi.svg": "6a972d0a25918b4768c2657f7c6171ce",
"assets/packages/phone_input/assets/svg/bj.svg": "d3851dcd9f584adb3afa392580902020",
"assets/packages/phone_input/assets/svg/bl.svg": "31e8620013edd075a030d51d6087b365",
"assets/packages/phone_input/assets/svg/bm.svg": "21debc2e785ee90e5cb17e4d1e51c2ef",
"assets/packages/phone_input/assets/svg/bn.svg": "d5a2d91852038fab108963ea00f36712",
"assets/packages/phone_input/assets/svg/bo.svg": "b1232fed4a8a6f174e8e7fd6b168c4ec",
"assets/packages/phone_input/assets/svg/bq-bo.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/phone_input/assets/svg/bq-sa.svg": "52ed892c88ef61e42e1c3465362db300",
"assets/packages/phone_input/assets/svg/bq-se.svg": "3e551d07e69dbcc311e3db6e5f7ec2ef",
"assets/packages/phone_input/assets/svg/bq.svg": "63fa6eef889e055a5af0496cf8c8adfe",
"assets/packages/phone_input/assets/svg/br.svg": "e92ea44308d2457a744619b5cc3d9472",
"assets/packages/phone_input/assets/svg/bs.svg": "11baf2fb451c85649dea07ad5503b382",
"assets/packages/phone_input/assets/svg/bt.svg": "d35b5dd296478dbb051851d853a280f0",
"assets/packages/phone_input/assets/svg/bv.svg": "2bdc5b87087a82ae96f0510817bba4e2",
"assets/packages/phone_input/assets/svg/bw.svg": "8b493920bf8c0e60ff203403e668c73f",
"assets/packages/phone_input/assets/svg/by.svg": "046bdb0db51c398d3ae6a689e05f379d",
"assets/packages/phone_input/assets/svg/bz.svg": "10078a026b33398e760e021504be9b31",
"assets/packages/phone_input/assets/svg/ca-bc.svg": "18d129f55796f28217e5368f096d97bc",
"assets/packages/phone_input/assets/svg/ca.svg": "f3277db42e8a0498c5f23b58c4d681fe",
"assets/packages/phone_input/assets/svg/cc.svg": "78a55c27fdfb24bb8e8844add13d0db4",
"assets/packages/phone_input/assets/svg/cd.svg": "4346647bc68ddba26c8a09980a380d8a",
"assets/packages/phone_input/assets/svg/cefta.svg": "54b2dd1262076b3b784d43e543fa9e82",
"assets/packages/phone_input/assets/svg/cf.svg": "4bc3c371085a08dce1411bf09fba56c0",
"assets/packages/phone_input/assets/svg/cg.svg": "7224e6dd55479c5585bd44b032f9c009",
"assets/packages/phone_input/assets/svg/ch.svg": "546f8fd7063a919f45513c7f63bd8c7c",
"assets/packages/phone_input/assets/svg/ci.svg": "71b3f6b842edddfcbd0c964f6c45d7f1",
"assets/packages/phone_input/assets/svg/ck.svg": "ae3ea163a41e7acc6ec68d293ee62911",
"assets/packages/phone_input/assets/svg/cl.svg": "ba994eeac968bc6e8fc418909a251669",
"assets/packages/phone_input/assets/svg/cm.svg": "b2723805bb88df273f2a96d5f863ae31",
"assets/packages/phone_input/assets/svg/cn.svg": "01b1e16506941b544ede62b2d65fdbad",
"assets/packages/phone_input/assets/svg/co.svg": "e941777c0e355a7a9eab04b84e2ac3f8",
"assets/packages/phone_input/assets/svg/cp.svg": "6ed2b4d2f1f99ff664e83a018ce6a237",
"assets/packages/phone_input/assets/svg/cr.svg": "e420f95f45a1d7e904fc4b78dfb97886",
"assets/packages/phone_input/assets/svg/cu.svg": "ab66dfe9292ac9a2879cab88dc470816",
"assets/packages/phone_input/assets/svg/cv.svg": "3f3bde25e9f6cdc75c0f4d1061e45d3b",
"assets/packages/phone_input/assets/svg/cw.svg": "6f6c3e0c379b61c7cdaaec6afaf234c7",
"assets/packages/phone_input/assets/svg/cx.svg": "bbaba316c3e9a6b27ed5d6cbd9f0512c",
"assets/packages/phone_input/assets/svg/cy.svg": "b3ef7d784e6260167591594e5c61350f",
"assets/packages/phone_input/assets/svg/cz.svg": "859f18a5acfd4e8d702a9b3d539dfd2d",
"assets/packages/phone_input/assets/svg/de.svg": "78feb91bfda2ddce6bcfdcbab050995b",
"assets/packages/phone_input/assets/svg/dg.svg": "c4db59ccb981f58f3e82b5e86b9df272",
"assets/packages/phone_input/assets/svg/dj.svg": "ed9a7e110f7fb508386420d3ade97cc8",
"assets/packages/phone_input/assets/svg/dk.svg": "33bba71c12896b2df18901d98cf2b62c",
"assets/packages/phone_input/assets/svg/dm.svg": "39c733797907098cd3773637b9a1bdc0",
"assets/packages/phone_input/assets/svg/do.svg": "34c1c3c6efb53bccf2ae7a8497073e1f",
"assets/packages/phone_input/assets/svg/dz.svg": "b37c4fcf5782f19c46c24f834a141bb1",
"assets/packages/phone_input/assets/svg/ea.svg": "a4525b4f78f41ec588eaa17fea35de4d",
"assets/packages/phone_input/assets/svg/easter_island.svg": "ef05c647c03de345776b876b64339d09",
"assets/packages/phone_input/assets/svg/ec-w.svg": "0027f5bd4872d5906a9b4476478d4f8a",
"assets/packages/phone_input/assets/svg/ec.svg": "983c3e4d3abc494206a1d34d9bed65cf",
"assets/packages/phone_input/assets/svg/ee.svg": "024d75affe3cd78a9d3f0e9e1707a2bd",
"assets/packages/phone_input/assets/svg/eg.svg": "34cb0b1f6dcb54334a4b2581cc7b742a",
"assets/packages/phone_input/assets/svg/eh.svg": "91450dc7e906a38a8759ef7893d30ea8",
"assets/packages/phone_input/assets/svg/er.svg": "075f7d29333fde30b467add6d99b87dc",
"assets/packages/phone_input/assets/svg/es-ce.svg": "4b77e8a38b294567848c5bbbcfdc61e5",
"assets/packages/phone_input/assets/svg/es-cn.svg": "eda9ddb6623e7f01e7195e37a6c44f59",
"assets/packages/phone_input/assets/svg/es-ct.svg": "4cf48425dcfa48bd4e2b56f612b3ba0d",
"assets/packages/phone_input/assets/svg/es-ga.svg": "98d4d5e8669155d14fed1e8696813ccb",
"assets/packages/phone_input/assets/svg/es-ib.svg": "40ad6feef01064938cb741af68a25ca4",
"assets/packages/phone_input/assets/svg/es-ml.svg": "6fa87d6de5b0aa9ff692b8158b0d6929",
"assets/packages/phone_input/assets/svg/es-pv.svg": "290d42d66b6e93eb7e3ddde33f1c50c2",
"assets/packages/phone_input/assets/svg/es-variant.svg": "3902bb17032f3f68e80d5e4351605e78",
"assets/packages/phone_input/assets/svg/es.svg": "91221aeba452aeb57c55826c70920835",
"assets/packages/phone_input/assets/svg/esperanto.svg": "b6d57fb0c24ebce04220870aff30e035",
"assets/packages/phone_input/assets/svg/es_ct.svg": "3eb3a35a978070fd4a68db545c527b54",
"assets/packages/phone_input/assets/svg/es_ga.svg": "186685299735a4fd2ac07d20479336a6",
"assets/packages/phone_input/assets/svg/et.svg": "5b654c1113b93559f6a0f49e50580251",
"assets/packages/phone_input/assets/svg/eu.svg": "510ca6da0d406bf2e66dce7733deff41",
"assets/packages/phone_input/assets/svg/european_union.svg": "9b140a871cc76b99499cb4da03a4046b",
"assets/packages/phone_input/assets/svg/fi.svg": "0e5ef3f583daa1a415330bed83ce8c4a",
"assets/packages/phone_input/assets/svg/fj.svg": "16e1816076d0cd120e7d35ba7538f445",
"assets/packages/phone_input/assets/svg/fk.svg": "5809c52f724f4d16d55e5c885a53a44b",
"assets/packages/phone_input/assets/svg/fm.svg": "4018ab572f721ba0aea911b594935ff3",
"assets/packages/phone_input/assets/svg/fo.svg": "401db8a8d99ff640e9250da757e2d0a1",
"assets/packages/phone_input/assets/svg/fr-h.svg": "43089b2c762b067a316ee6dbc954ebf8",
"assets/packages/phone_input/assets/svg/fr.svg": "b3f83270f3b080ccc87b0f87155c5fdb",
"assets/packages/phone_input/assets/svg/ga.svg": "f64e29ed68d2165d3620d53978933bb6",
"assets/packages/phone_input/assets/svg/gb-eng.svg": "d050a56e287a41eaeacc78eaef7c0358",
"assets/packages/phone_input/assets/svg/gb-ork.svg": "55041097d3b91b8de580d6c68a7e7ba6",
"assets/packages/phone_input/assets/svg/gb-sct.svg": "d0351c4d43a3f3f110d708709f553cda",
"assets/packages/phone_input/assets/svg/gb-wls.svg": "38bc63f22463f3515144e305d31f9d75",
"assets/packages/phone_input/assets/svg/gb.svg": "fcfef6780b36bef537381474df9d0be9",
"assets/packages/phone_input/assets/svg/gb_eng.svg": "7caecb785400d1cca7b319887a9d81bf",
"assets/packages/phone_input/assets/svg/gb_nir.svg": "4bcdeacbaadb89951a2cf091276e6bd9",
"assets/packages/phone_input/assets/svg/gb_sct.svg": "ade55ed456211d6577b2f80c06e40c51",
"assets/packages/phone_input/assets/svg/gb_wls.svg": "9490411928d3db5cad64a17d7c2c9f8b",
"assets/packages/phone_input/assets/svg/gd.svg": "a4765aa3f1b7effd3eb90598662839de",
"assets/packages/phone_input/assets/svg/ge-ab.svg": "998a80783383964d8298e5aac40b6b8d",
"assets/packages/phone_input/assets/svg/ge.svg": "a397fa63e3a6dc02a99a7093aa43d3a9",
"assets/packages/phone_input/assets/svg/gf.svg": "7686bbb205d0e05418171932e22e4dd3",
"assets/packages/phone_input/assets/svg/gg.svg": "453d95c72cd4fdccd241b61a839603ff",
"assets/packages/phone_input/assets/svg/gh.svg": "b1a97938c1f961df78998f50cc3d542e",
"assets/packages/phone_input/assets/svg/gi.svg": "91a5075cf0fa2ca4b3e08b9b24f5ccb2",
"assets/packages/phone_input/assets/svg/gl.svg": "c6090a99ab0402116f4ab70719eb034a",
"assets/packages/phone_input/assets/svg/gm.svg": "c166e344fadb235ab8807f21299e245c",
"assets/packages/phone_input/assets/svg/gn.svg": "0ee145e635f6ab87596074a453740852",
"assets/packages/phone_input/assets/svg/gp.svg": "3f694ab49a71da1fc6be0285d43f80ef",
"assets/packages/phone_input/assets/svg/gq.svg": "52b4ac099f46be415847f63cde06289c",
"assets/packages/phone_input/assets/svg/gr.svg": "b7789740298234956ea3ee2999c5e996",
"assets/packages/phone_input/assets/svg/gs.svg": "e217176641908e21302f9430ec9c15f7",
"assets/packages/phone_input/assets/svg/gt.svg": "e92a8827a2b879f5e1a08414e4bf8768",
"assets/packages/phone_input/assets/svg/gu.svg": "3a19af9300cc67ff4a5dc7fe93b1d4e3",
"assets/packages/phone_input/assets/svg/gw.svg": "6241752e14e4af2b1f8c1ea22688e668",
"assets/packages/phone_input/assets/svg/gy.svg": "6a64d2f47b268200557555ac4ffcd8dd",
"assets/packages/phone_input/assets/svg/hausa.svg": "9a83dad6facbe7da17fee9cdeb0938b3",
"assets/packages/phone_input/assets/svg/hk.svg": "524a0c9dc94836843471cfae2996630c",
"assets/packages/phone_input/assets/svg/hm.svg": "e49ba24a0e759a8d849c4c709adf7fb8",
"assets/packages/phone_input/assets/svg/hmong.svg": "d1e8c16e006679f3932f61239683cebe",
"assets/packages/phone_input/assets/svg/hn.svg": "e4953d7b732a30f97a13706fc34a9680",
"assets/packages/phone_input/assets/svg/hr.svg": "9b7fd1f4bbdbe44a159903d73ac3a7e1",
"assets/packages/phone_input/assets/svg/ht.svg": "308e9036a6dac20da62b0a0c44349752",
"assets/packages/phone_input/assets/svg/hu.svg": "966f49336f7466efd6f8dbe19f9fc300",
"assets/packages/phone_input/assets/svg/ic.svg": "60638b8f24981d2afb9e00c1b9ecf02f",
"assets/packages/phone_input/assets/svg/id.svg": "4430b2add8b031d6317a6268e919320a",
"assets/packages/phone_input/assets/svg/ie.svg": "6ee08def8fcdfaaae590126a6b001f72",
"assets/packages/phone_input/assets/svg/il.svg": "2d03d17515cb97c75b0835542981c8a9",
"assets/packages/phone_input/assets/svg/im.svg": "4c17899a113d6a53a103afaf170d3c07",
"assets/packages/phone_input/assets/svg/in.svg": "fd8e911182680a39719929a06ae8658b",
"assets/packages/phone_input/assets/svg/io.svg": "4a6eeb7e0b6cac9a266d1aba47b95cbf",
"assets/packages/phone_input/assets/svg/iq.svg": "77828901b08c8bde8d09bc969f6fe2bd",
"assets/packages/phone_input/assets/svg/ir.svg": "a80877a949c0c194c195ebc60697031c",
"assets/packages/phone_input/assets/svg/is.svg": "bbbe326a67e92bd5d8a0092173d2dea4",
"assets/packages/phone_input/assets/svg/it-82.svg": "56a874b68c6aa074e1197b3447949c96",
"assets/packages/phone_input/assets/svg/it-88.svg": "c90a93eadf4f50443f33b5b6e5b892e4",
"assets/packages/phone_input/assets/svg/it.svg": "14b431fe03917337206f76b5bfbfa9b4",
"assets/packages/phone_input/assets/svg/je.svg": "3ce4030e1496e6bf492e92873fe98117",
"assets/packages/phone_input/assets/svg/jm.svg": "7c6602774a31cdc41f9ceae4ab057c3f",
"assets/packages/phone_input/assets/svg/jo.svg": "fab7db404b1d2a7070090fdb7111912c",
"assets/packages/phone_input/assets/svg/jp.svg": "6204370d9b7353c05bf87d43fe305325",
"assets/packages/phone_input/assets/svg/kannada.svg": "2648ec163d71181ee1d1cba0cc06ef72",
"assets/packages/phone_input/assets/svg/ke.svg": "3db68a6675308826f2355392d7a2db65",
"assets/packages/phone_input/assets/svg/kg.svg": "d4129702d25cd7cd89c7219ec5541786",
"assets/packages/phone_input/assets/svg/kh.svg": "a17374375f50fae95a315cdc23913f0c",
"assets/packages/phone_input/assets/svg/ki.svg": "d739bbfe3bf8d6d4e734ac1e3c053f4d",
"assets/packages/phone_input/assets/svg/km.svg": "0bae0c7e324c88ada40abee678bb5995",
"assets/packages/phone_input/assets/svg/kn.svg": "2803f39dd48472c5becf3455d2a5114f",
"assets/packages/phone_input/assets/svg/kp.svg": "08aedd0833a363b96522941527ef2857",
"assets/packages/phone_input/assets/svg/kr.svg": "36df672a74a9177c3d978f6f75ff2842",
"assets/packages/phone_input/assets/svg/kurdistan.svg": "741ccd3babdcb24d72428af01263af47",
"assets/packages/phone_input/assets/svg/kw.svg": "a214c11a9b3e71711b85e554d93256b2",
"assets/packages/phone_input/assets/svg/ky.svg": "08cf994a700960076615913488ae8a53",
"assets/packages/phone_input/assets/svg/kz.svg": "263fd9387aa84ebfb4f501c30df2c7f7",
"assets/packages/phone_input/assets/svg/la.svg": "657f907203cb3fca486faa30bd51c4d9",
"assets/packages/phone_input/assets/svg/lb.svg": "9cf390937b99cf9c579e06b86dead461",
"assets/packages/phone_input/assets/svg/lc.svg": "940e9ba93eec286b5abee7657cf03283",
"assets/packages/phone_input/assets/svg/li.svg": "0f6fda67daaceda3756227d9169233c0",
"assets/packages/phone_input/assets/svg/lk.svg": "e1702f7837e4d2ad69cb64edd54d7133",
"assets/packages/phone_input/assets/svg/lr.svg": "7e10cdc757aad81582c655a71c6e8eef",
"assets/packages/phone_input/assets/svg/ls.svg": "4da8ca4f6e1c0d5486f4d6e30256c6d6",
"assets/packages/phone_input/assets/svg/lt.svg": "88a1c5fd287aad7db9b15a5c49a22b87",
"assets/packages/phone_input/assets/svg/lu.svg": "7f70b02c8514c31fc4de448b419ae0d6",
"assets/packages/phone_input/assets/svg/lv.svg": "0b4e6e1a21a939a1a474341da5aee4ca",
"assets/packages/phone_input/assets/svg/ly.svg": "cf5ec006fe2b8fc1a65ad155c927f0a9",
"assets/packages/phone_input/assets/svg/ma.svg": "a2e6a76e5f38058fd28b706beeb6a1b7",
"assets/packages/phone_input/assets/svg/malayali.svg": "da4074e5829d9e254b99798875004137",
"assets/packages/phone_input/assets/svg/maori.svg": "780a41357161eda9c3ed73ad1f8fb197",
"assets/packages/phone_input/assets/svg/mc.svg": "411a6548c45270444b5c470bf1aec9a4",
"assets/packages/phone_input/assets/svg/md.svg": "e5423f71754b85641380f1cdc4f3a61d",
"assets/packages/phone_input/assets/svg/me.svg": "144e25db369a068c521780d81ee22bcb",
"assets/packages/phone_input/assets/svg/mf.svg": "4c96fa7f078c183df678a5824659f127",
"assets/packages/phone_input/assets/svg/mg.svg": "cbe258dec82cd3a3653f2d3ad239c291",
"assets/packages/phone_input/assets/svg/mh.svg": "63433c4cd0e5030836734de14bc1e52a",
"assets/packages/phone_input/assets/svg/mk.svg": "b96b8a63c2939ef1e4cebb9585908591",
"assets/packages/phone_input/assets/svg/ml.svg": "1dd7a9ccbcd179a5a3fba550970ad75c",
"assets/packages/phone_input/assets/svg/mm.svg": "6d702a74ce6149ddb4a4fe643f12d1fa",
"assets/packages/phone_input/assets/svg/mn.svg": "1ef812fb28554e7d9b4c2da6b96e89c9",
"assets/packages/phone_input/assets/svg/mo.svg": "e26a4c9d3e2d83eaf88f89a730cc1538",
"assets/packages/phone_input/assets/svg/mp.svg": "3b0ecf6bf2415db1c20e0debd574b4aa",
"assets/packages/phone_input/assets/svg/mq.svg": "c0083bff1c6bbd2a9bf806b88dd94a8a",
"assets/packages/phone_input/assets/svg/mr.svg": "4610ac53854ba558c74d5c8eccc21e2a",
"assets/packages/phone_input/assets/svg/ms.svg": "be07a14636ff98949ae89501ec3d5c03",
"assets/packages/phone_input/assets/svg/mt.svg": "f03cb2a9898aee044094b32851cdbdf6",
"assets/packages/phone_input/assets/svg/mu.svg": "46514c8008dc3564e49eaa790f28e255",
"assets/packages/phone_input/assets/svg/mv.svg": "44a3b21f0ab17367c095a8798f7cc4da",
"assets/packages/phone_input/assets/svg/mw.svg": "43fa5a90eb0b8257e6803b921619ba34",
"assets/packages/phone_input/assets/svg/mx.svg": "bb1b6c4c781fa27bde2dccc5aa0d650c",
"assets/packages/phone_input/assets/svg/my.svg": "8358896e0b6f2aa8f4e793183cfe4e43",
"assets/packages/phone_input/assets/svg/mz.svg": "e5b35eb650b7f9a030c6ac59fcce5114",
"assets/packages/phone_input/assets/svg/na.svg": "311ed128140f4a67d48cd3a06fd32cb8",
"assets/packages/phone_input/assets/svg/nato.svg": "cdf78a6e76cb756a074668f51f5a4aff",
"assets/packages/phone_input/assets/svg/nc.svg": "c292b9576b6951a3b81714d01975dba9",
"assets/packages/phone_input/assets/svg/ne.svg": "5c109026a107f910512b09e208a90538",
"assets/packages/phone_input/assets/svg/nf.svg": "cc20348d89f9f1702b1a6760f33697e2",
"assets/packages/phone_input/assets/svg/ng.svg": "d99b17d302a46ee757c9690c943c6a54",
"assets/packages/phone_input/assets/svg/ni.svg": "5d25063c36586808c99e08b94217b794",
"assets/packages/phone_input/assets/svg/nl.svg": "f685765a298db5ba59fddfa6de08020e",
"assets/packages/phone_input/assets/svg/no.svg": "859a13561a1b24bfa65fb1a03835da49",
"assets/packages/phone_input/assets/svg/northern_cyprus.svg": "b99e898aaf75ecf42727ac9b3764a5a2",
"assets/packages/phone_input/assets/svg/np.svg": "516aa28b5b9403b6269fd162aba87ef6",
"assets/packages/phone_input/assets/svg/nr.svg": "32403c046655820a413ba2026421c4c2",
"assets/packages/phone_input/assets/svg/nu.svg": "bfd6de48e40574ec6d86c6e0589baa48",
"assets/packages/phone_input/assets/svg/nz.svg": "55c65e06d0b73b57f438e2af94f730ff",
"assets/packages/phone_input/assets/svg/om.svg": "f6c99331215f99ac42df054dbcd1915e",
"assets/packages/phone_input/assets/svg/pa.svg": "3711c2a457afef38f62e00613c372800",
"assets/packages/phone_input/assets/svg/pe.svg": "87a62d2ae3374793a5704def9a4cf211",
"assets/packages/phone_input/assets/svg/pf.svg": "6cf0ca23f51d9043c323a37e79d6a13c",
"assets/packages/phone_input/assets/svg/pg.svg": "350974494867e834ec0fae91d98e9efd",
"assets/packages/phone_input/assets/svg/ph.svg": "64c3d8b03bf21d10661c2384ebf3247f",
"assets/packages/phone_input/assets/svg/pk.svg": "f84d250f49c2d7d5ff613318127babea",
"assets/packages/phone_input/assets/svg/pl.svg": "f7adaa942c63ca98f1d2362bc67c45e3",
"assets/packages/phone_input/assets/svg/pm.svg": "51843933f08848014a44438c0742f0b5",
"assets/packages/phone_input/assets/svg/pn.svg": "7d49d6f9d00d6e435c6d34084f21491f",
"assets/packages/phone_input/assets/svg/pr.svg": "67d085847a24bd505e4a207e4f495724",
"assets/packages/phone_input/assets/svg/ps.svg": "09540aca6116cd88fac4a6779d71bc96",
"assets/packages/phone_input/assets/svg/pt-20.svg": "a596a02d4bc1a13285777fbc05430a52",
"assets/packages/phone_input/assets/svg/pt-30.svg": "e3fb9bb891fa0b38c778802d8c719b0e",
"assets/packages/phone_input/assets/svg/pt.svg": "a36b3d87508ad8f6a6bc6787bbe808ed",
"assets/packages/phone_input/assets/svg/pw.svg": "69f2dbf8d0f0e6180eb5c5d538b5cbd7",
"assets/packages/phone_input/assets/svg/py.svg": "d3e57b21c6b9cbe61a792e6592e1811b",
"assets/packages/phone_input/assets/svg/qa.svg": "9dfdc1ae61fc572c4d2f7b329a3eeeb5",
"assets/packages/phone_input/assets/svg/re.svg": "3d8a1cb89c482b5e0f268c5125195808",
"assets/packages/phone_input/assets/svg/ro.svg": "7717cda7b7dddd62b0cc4d7b3f4a3ee4",
"assets/packages/phone_input/assets/svg/rs.svg": "8da5ecac6d8ccd9cfa72b5b20303d6d3",
"assets/packages/phone_input/assets/svg/ru.svg": "fa25680994307b1dbf6bcf8bdf8afd6a",
"assets/packages/phone_input/assets/svg/rw.svg": "e28b5d139e8f8ef57a246718fad4f773",
"assets/packages/phone_input/assets/svg/sa.svg": "45e813d3eb2c3c110eec47173873ad77",
"assets/packages/phone_input/assets/svg/sb.svg": "bb9130d988ec207cf282c53cd25091be",
"assets/packages/phone_input/assets/svg/sc.svg": "ab4767bc4088728a6841e7e578f6c7a8",
"assets/packages/phone_input/assets/svg/sd.svg": "337da8e4b5164ee1a6976c62c94c4e3f",
"assets/packages/phone_input/assets/svg/se.svg": "e9e24cfb2d85c7e39aafe267fffb0810",
"assets/packages/phone_input/assets/svg/sg.svg": "6d05bf51ee6bd83bb2d633edb6778286",
"assets/packages/phone_input/assets/svg/sh-ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/phone_input/assets/svg/sh-hl.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/phone_input/assets/svg/sh-ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/phone_input/assets/svg/sh.svg": "42100063de4741612cb71e9eb2c246a8",
"assets/packages/phone_input/assets/svg/si.svg": "18e37ff5b13f72ae55377cf2fbde4e9c",
"assets/packages/phone_input/assets/svg/sindh.svg": "52dbd15d1a3b821a6d56f54dab7f7128",
"assets/packages/phone_input/assets/svg/sj.svg": "5b6dddaf6a82ad8090d313f3088b7e2d",
"assets/packages/phone_input/assets/svg/sk.svg": "6363e990e97551bbabf9316bf0200d30",
"assets/packages/phone_input/assets/svg/sl.svg": "af0884d411f36ff8e0fb199a00b70691",
"assets/packages/phone_input/assets/svg/sm.svg": "23fa1b3135a3960beea7cb911055187d",
"assets/packages/phone_input/assets/svg/sn.svg": "7512b889fbefeb77f55fe7d419368f58",
"assets/packages/phone_input/assets/svg/so.svg": "3078f0e32a30c448c4886e49185b5e0a",
"assets/packages/phone_input/assets/svg/somaliland.svg": "2629d69fe6199ba15e457336520ad1c4",
"assets/packages/phone_input/assets/svg/south_ossetia.svg": "9103c2bf68a2cfd62683b0f5e0fc5741",
"assets/packages/phone_input/assets/svg/sr.svg": "07e91c157e4b9e240d9b004da3529f08",
"assets/packages/phone_input/assets/svg/ss.svg": "9a15dd43db84232e2a99b343c73dc2f0",
"assets/packages/phone_input/assets/svg/st.svg": "12444111a834c4924ca5a5d6c8bbb10a",
"assets/packages/phone_input/assets/svg/sv.svg": "2e44b8d35c6d3192f072f15ae1215e29",
"assets/packages/phone_input/assets/svg/sx.svg": "85f3d6ad16b4f430954dd3680a0cb67f",
"assets/packages/phone_input/assets/svg/sy.svg": "b288d06027dd0a86539faa3b1635cc73",
"assets/packages/phone_input/assets/svg/sz.svg": "9a86ca49275c8a3d5a8868785018a2c7",
"assets/packages/phone_input/assets/svg/ta.svg": "cd7f394fecf83213ed4c64d8a28e3af5",
"assets/packages/phone_input/assets/svg/tc.svg": "37caf3757f0d4a31c68f61e1426c6bb9",
"assets/packages/phone_input/assets/svg/td.svg": "e092133da9e0fba424dba80e4de91d3f",
"assets/packages/phone_input/assets/svg/tf.svg": "b444aed98557f781c72b655c278633d6",
"assets/packages/phone_input/assets/svg/tg.svg": "246435cfa869f4501a222815f21baf28",
"assets/packages/phone_input/assets/svg/th.svg": "bcc03a3cd1a367274a2444aff71c0a68",
"assets/packages/phone_input/assets/svg/tibet.svg": "0b1b4721d2e507f50d57868263398959",
"assets/packages/phone_input/assets/svg/tj.svg": "71c18cc6c6e3f4a4df3bcd3e1fd4c8a1",
"assets/packages/phone_input/assets/svg/tk.svg": "5a5f29010b5758c306125f3cd2d061b0",
"assets/packages/phone_input/assets/svg/tl.svg": "ea67079b55e411b52dd6d68c4928322e",
"assets/packages/phone_input/assets/svg/tm.svg": "f7463aa4b851833159705705f981cbd6",
"assets/packages/phone_input/assets/svg/tn.svg": "e09b55bca5160afdb76dca844efe4130",
"assets/packages/phone_input/assets/svg/to.svg": "44dc567021a520eaf3c744755fdbda0e",
"assets/packages/phone_input/assets/svg/tr.svg": "4dd4b60c8a5e3dad5e65fdfa9745c03f",
"assets/packages/phone_input/assets/svg/transnistria.svg": "f1d0f3cc33a89aa123722ff0a0ec7f1d",
"assets/packages/phone_input/assets/svg/tt.svg": "db362840eedbb651bff0b539e387bfb6",
"assets/packages/phone_input/assets/svg/tv.svg": "c75afdde63ae0e1e205c5dfd653afffe",
"assets/packages/phone_input/assets/svg/tw.svg": "79a7a46a494911a01036f4fe68e0e959",
"assets/packages/phone_input/assets/svg/tz.svg": "c954f4908179661eae0d3102f48c6e91",
"assets/packages/phone_input/assets/svg/ua.svg": "cd20087e2d1a35c208b740c45d539243",
"assets/packages/phone_input/assets/svg/ug.svg": "2758b58145f54be5cbb2f60291526d52",
"assets/packages/phone_input/assets/svg/um.svg": "912494462559f2ebbedb5f4655285236",
"assets/packages/phone_input/assets/svg/un.svg": "5232b1ea60a370c46c7e3cae2d8bd00e",
"assets/packages/phone_input/assets/svg/united_nations.svg": "ace4d8cc09fda98cc416b17ca976ae94",
"assets/packages/phone_input/assets/svg/us-hi.svg": "3dc47ef92dc763fd0f95f847c8235f7c",
"assets/packages/phone_input/assets/svg/us.svg": "4a8e7af9a24474034fd6e6417981ac8e",
"assets/packages/phone_input/assets/svg/uy.svg": "a4931745a01469ef5a3ef89343a211ee",
"assets/packages/phone_input/assets/svg/uz.svg": "7c1bc5a1f5aee60e57380f3db156a060",
"assets/packages/phone_input/assets/svg/va.svg": "e06e2790c52620f7ef00239f3dbc2e70",
"assets/packages/phone_input/assets/svg/vc.svg": "0d135a5aaa2be532208f06d7ba9f7b08",
"assets/packages/phone_input/assets/svg/ve.svg": "d358f3427b172795014e958354ad7dc4",
"assets/packages/phone_input/assets/svg/vg.svg": "b1c5905335f081d7e537a1b8db1088aa",
"assets/packages/phone_input/assets/svg/vi.svg": "8a74e2f6f1a5072c3cc722abcf18fb04",
"assets/packages/phone_input/assets/svg/vn.svg": "32af85491ecc2bd69601ecaac60b7dfa",
"assets/packages/phone_input/assets/svg/vu.svg": "f445ffe42f867e71408d92b4f7eed517",
"assets/packages/phone_input/assets/svg/wf.svg": "21cb7693fb49987ba9570bfb6826d720",
"assets/packages/phone_input/assets/svg/ws.svg": "10e5c28320bc451d5c3988c67ef1b7ac",
"assets/packages/phone_input/assets/svg/xk.svg": "6f10dceb91bda301d4d8a33a4542ff83",
"assets/packages/phone_input/assets/svg/xx.svg": "4f0521d49f071018959ad7869a72cf22",
"assets/packages/phone_input/assets/svg/ye.svg": "8d785adb793e425a888197a668ef52cc",
"assets/packages/phone_input/assets/svg/yiddish.svg": "3c4832acb4d8a2c13290e6221c055193",
"assets/packages/phone_input/assets/svg/yt.svg": "8f86f691467c659697670a15ee34c397",
"assets/packages/phone_input/assets/svg/za.svg": "67a3532410efdcd48509d309d2caaa0e",
"assets/packages/phone_input/assets/svg/zm.svg": "6c516c1840962bf71d12be1284ea634e",
"assets/packages/phone_input/assets/svg/zw.svg": "014ad209bf9944bcef0be9ae4e225fc8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d1026086d642581c9060e795cffadd3b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e56a1fa692439d3eb2e6be28d03513b1",
"icons/Icon-192.png": "30380e0dfe4189599af0021b06e862d1",
"icons/Icon-512.png": "e12396e2ae05280477bffa1cb8b7fbf5",
"icons/Icon-maskable-192.png": "30380e0dfe4189599af0021b06e862d1",
"icons/Icon-maskable-512.png": "e12396e2ae05280477bffa1cb8b7fbf5",
"index.html": "9c953a1fabae503cad6c8ef95c90f90c",
"/": "9c953a1fabae503cad6c8ef95c90f90c",
"main.dart.js": "110c3abef29a636500232c90167a78e5",
"manifest.json": "1f286f0242dd870350f65307f31effb8",
"paystack_interop.js": "5be1bf76ed3c4d1e988f2ce737e2e4ee",
"version.json": "b8b2826bc2f5f90f0e3a6653ad0fc250"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
