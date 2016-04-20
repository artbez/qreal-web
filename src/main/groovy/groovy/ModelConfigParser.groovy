/*
 * Copyright Denis Ageev
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package groovy

/**
 * Created by dageev on 26.03.15.
 */
class ModelConfigParser {
    ModelConfig parse(String modelConfigXml) {


        Map<String, Device> devicePorts = [:]

        def modelConfig = new XmlParser().parseText(modelConfigXml)
        modelConfig.children().each { port ->
            if (port.children().size() == 1)
                devicePorts.put(port.name(), port.children()[0].name())
        }

        return new ModelConfig(devicePorts)

    }
}

