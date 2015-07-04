<?php
    /*********************************************************************************
     * Zurmo is a customer relationship management program developed by
     * Zurmo, Inc. Copyright (C) 2014 Zurmo Inc.
     *
     * Zurmo is free software; you can redistribute it and/or modify it under
     * the terms of the GNU Affero General Public License version 3 as published by the
     * Free Software Foundation with the addition of the following permission added
     * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
     * IN WHICH THE COPYRIGHT IS OWNED BY ZURMO, ZURMO DISCLAIMS THE WARRANTY
     * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
     *
     * Zurmo is distributed in the hope that it will be useful, but WITHOUT
     * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
     * FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
     * details.
     *
     * You should have received a copy of the GNU Affero General Public License along with
     * this program; if not, see http://www.gnu.org/licenses or write to the Free
     * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
     * 02110-1301 USA.
     *
     * You can contact Zurmo, Inc. with a mailing address at 27 North Wacker Drive
     * Suite 370 Chicago, IL 60606. or at email address contact@zurmo.com.
     *
     * The interactive user interfaces in original and modified versions
     * of this program must display Appropriate Legal Notices, as required under
     * Section 5 of the GNU Affero General Public License version 3.
     *
     * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
     * these Appropriate Legal Notices must retain the display of the Zurmo
     * logo and Zurmo copyright notice. If the display of the logo is not reasonably
     * feasible for technical reasons, the Appropriate Legal Notices must display the words
     * "Copyright Zurmo Inc. 2014. All rights reserved".
     ********************************************************************************/

    class LoginForm extends CFormModel
    {
        public $username;
        public $password;
        public $rememberMe;

        private $_identity;

        public function rules()
        {
            return array(
                array('username, password', 'required'),
                array('rememberMe', 'boolean'),
                array('password', 'authenticate', 'skipOnError' => true),
            );
        }

        public function attributeLabels()
        {
            return array(
                'username'   => Zurmo::t('ZurmoModule', 'Username'),
                'password'   => Zurmo::t('ZurmoModule', 'Password'),
                'rememberMe' => Zurmo::t('ZurmoModule', 'Keep me logged in'),
            );
        }

        public function authenticate($attribute, $params)
        {
            $this->_identity = Yii::app()->authenticationHelper->makeIdentity($this->username, $this->password);
            if (!$this->_identity->authenticate())
            {
                $this->addError('password', Zurmo::t('ZurmoModule', 'Incorrect username or password.'));
            }
            else
            {
                Yii::app()->licenseManager->resolveUserIdentityAuthenticationForError($this, $this->_identity);
            }
        }

        public function login()
        {
            if ($this->_identity === null)
            {
                $this->_identity = Yii::app()->authenticationHelper->makeIdentity($this->username, $this->password);
                $this->_identity->authenticate();
            }
            if ($this->_identity->errorCode == UserIdentity::ERROR_NONE)
            {
                $duration = $this->rememberMe ? 3600 * 24 * 30 : 0; // 30 days
                Yii::app()->user->login($this->_identity, $duration);

                // If user is usper admin, check for last stable zurmo version.
                $group = Group::getByName(Group::SUPER_ADMINISTRATORS_GROUP_NAME);
                $user = User::getByUsername(Yii::app()->user->username);
                if ($group->contains($user))
                {
                    ZurmoModule::checkAndUpdateZurmoInfo();
                    Yii::app()->licenseManager->checkAndUpdateLicenseInfo();
                }
                return true;
            }
            else
            {
                return false;
            }
        }
    }
?>